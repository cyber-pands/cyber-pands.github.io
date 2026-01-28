function initThemeToggle() {
  const root = document.documentElement;
  const toggle = document.getElementById("themeToggle");

  if (!toggle) return;

  // Load saved theme
  const savedTheme = localStorage.getItem("theme") || "dark";
  root.setAttribute("data-theme", savedTheme);
  toggle.checked = savedTheme === "light";

  // Toggle theme
  toggle.addEventListener("change", () => {
    const theme = toggle.checked ? "light" : "dark";
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  });
}