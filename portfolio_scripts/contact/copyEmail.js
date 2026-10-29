// Copy-to-clipboard buttons (e.g. the email in the contact section) and the footer year
document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("current-year");
  if (year) year.textContent = new Date().getFullYear();

  document.querySelectorAll("[data-copy]").forEach((button) => {
    const icon = button.querySelector("i");
    const label = button.getAttribute("aria-label");

    button.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(button.dataset.copy);
      } catch (e) {
        window.location.href = `mailto:${button.dataset.copy}`;
        return;
      }
      button.classList.add("copied");
      button.setAttribute("aria-label", "Copied!");
      if (icon) icon.className = "fa-solid fa-check";
      setTimeout(() => {
        button.classList.remove("copied");
        button.setAttribute("aria-label", label);
        if (icon) icon.className = "fa-regular fa-copy";
      }, 1800);
    });
  });
});
