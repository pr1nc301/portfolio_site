//Set footer year on every page
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

//Mobile menu toggle
const menuBtn = document.getElementById("menuBtn");
const siteNav = document.getElementById("siteNav");

if (menuBtn && siteNav) {
    menuBtn.addEventListener("click", () => {
      const isOpen = siteNav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(isOpen));
      menuBtn.textContent = isOpen ? "✕" : "☰";
    });
}

//Back to top button
const toTop = document.getElementById("toTop");
if (toTop) {
  window.addEventListener("scroll", () => {
    toTop.style.display = window.scrollY > 500 ? "grid" : "none";
  });

  toTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
