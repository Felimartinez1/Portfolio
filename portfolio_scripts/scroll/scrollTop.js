// "Back to top" button, shown after scrolling past the hero
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("scroll-top");
  if (!button) return;

  const update = () => button.classList.toggle("visible", window.scrollY > 600);
  window.addEventListener("scroll", update, { passive: true });
  update();

  button.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
});
