document.addEventListener("DOMContentLoaded", () => {
  loadHeader();
});

/* -----------------------------
   HEADER INCLUDE
------------------------------ */
function loadHeader() {
  const placeholder = document.getElementById("header-placeholder");
  if (!placeholder) return;

  fetch(getHeaderPath())
    .then(res => {
      if (!res.ok) throw new Error("Header not found");
      return res.text();
    })
    .then(html => {
      placeholder.innerHTML = html;
      initTheme(); // 🔥 initialize theme ONLY after header is loaded
    })
    .catch(err => {
      console.error("Header load failed:", err);
    });
}

/* -----------------------------
   PATH RESOLUTION (LOCAL + GH)
------------------------------ */
function getHeaderPath() {
  const path = window.location.pathname;
  const depth = path.split("/").length - 2;
  return "../".repeat(depth) + "header.html";
}

/* -----------------------------
   THEME TOGGLE LOGIC
------------------------------ */
function initTheme() {
  const toggleBtn = document.getElementById("theme-toggle");
  if (!toggleBtn) return;

  // Load saved theme or default to dark
  const savedTheme = localStorage.getItem("theme") || "dark";
  setTheme(savedTheme);

  toggleBtn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    setTheme(next);
  });
}

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}