// Dark mode toggle. The initial theme is applied inline in <head> to avoid a flash of the wrong theme.
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-toggle");
  if (!toggle) return;
  const root = document.documentElement;

  const sync = () => toggle.setAttribute("aria-pressed", String(root.getAttribute("data-theme") === "dark"));
  sync();

  toggle.addEventListener("click", () => {
    const isDark = root.getAttribute("data-theme") === "dark";
    if (isDark) {
      root.removeAttribute("data-theme");
    } else {
      root.setAttribute("data-theme", "dark");
    }
    try {
      localStorage.setItem("theme", isDark ? "light" : "dark");
    } catch (e) {
      // Storage can be unavailable (private mode); the toggle still works for this visit
    }
    sync();
  });
});
