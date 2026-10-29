// Navbar: gets a background once the page scrolls, hides while scrolling down, comes back when scrolling up,
// and highlights the link of the section currently in view.
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("mainNav");
  if (!nav) return;
  const menu = document.getElementById("navbarResponsive");
  const isMenuOpen = () => menu && menu.classList.contains("show");

  let lastY = window.scrollY;
  let ticking = false;

  function update() {
    const y = window.scrollY;
    nav.classList.toggle("scrolled", y > 10);
    if (y > lastY && y > 300 && !isMenuOpen()) {
      nav.classList.add("nav-hidden");
    } else if (y < lastY - 4 || y <= 300) {
      nav.classList.remove("nav-hidden");
    }
    lastY = y;
    ticking = false;
  }

  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });
  update();

  // Mobile menu (the navbar gets a background while it is open, even at the top of the page)
  const toggler = nav.querySelector(".navbar-toggler");

  function setMenu(open) {
    if (!menu || !toggler) return;
    menu.classList.toggle("show", open);
    toggler.setAttribute("aria-expanded", String(open));
    if (open) {
      nav.classList.add("scrolled");
    } else {
      update();
    }
  }

  if (toggler) toggler.addEventListener("click", () => setMenu(!isMenuOpen()));

  // Close it after picking a section, on Escape, or when tapping outside the navbar
  nav.querySelectorAll(".nav-link").forEach((link) => link.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && isMenuOpen()) setMenu(false);
  });
  document.addEventListener("click", (event) => {
    if (isMenuOpen() && !nav.contains(event.target)) setMenu(false);
  });

  // Highlight the link for the section crossing the middle of the viewport
  const links = new Map(
    [...nav.querySelectorAll('.nav-link[href^="#"]')].map((link) => [link.getAttribute("href").slice(1), link])
  );
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((link) => link.classList.remove("active"));
      const link = links.get(entry.target.id);
      if (link) link.classList.add("active");
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  document.querySelectorAll("section[id]").forEach((section) => observer.observe(section));
});
