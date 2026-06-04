// === DYNAMIC YEAR ===
document.getElementById("year").textContent = new Date().getFullYear();

// === NAVBAR SHADOW ON SCROLL ===
const navbar = document.getElementById("mainNavbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 40);
});

// === PDF FILE CHECK (Console Only) ===
(function () {
  const pdfPath = "All%20pages.pdf";
  fetch(pdfPath, { method: "HEAD" })
    .then((r) => {
      if (!r.ok)
        console.warn(
          "⚠️ PDF not found:",
          pdfPath,
          '- Ensure the file is uploaded to the same folder and named exactly "All pages.pdf" or update iframe src.'
        );
    })
    .catch(() =>
      console.warn(
        '⚠️ Could not verify PDF — please ensure "All pages.pdf" is available.'
      )
    );
})();

// === THEME TOGGLE (Light / Dark Mode) ===
const html = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

// Load saved theme from localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  html.setAttribute("data-theme", savedTheme);
  themeIcon.className =
    savedTheme === "dark" ? "bi bi-moon-fill" : "bi bi-sun-fill";
}

// Toggle theme on click
themeToggle.addEventListener("click", () => {
  const current = html.getAttribute("data-theme");
  const next = current === "light" ? "dark" : "light";
  html.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  themeIcon.className = next === "dark" ? "bi bi-moon-fill" : "bi bi-sun-fill";
});
