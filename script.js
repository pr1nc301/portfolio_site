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

//Reveal on scroll to add a nice animation
const revealTargets = document.querySelectorAll(".section, .project-card, .hero-text, .hero-card");
revealTargets.forEach(el => el.classList.add("reveal"));

const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("show");
      });
    },
    { threshold: 0.12 }
);
  
revealTargets.forEach(el => observer.observe(el));


//Project search filter
const searchInput = document.getElementById("projectSearch");
if (searchInput) {
  const cards = Array.from(document.querySelectorAll(".project-card"));

  searchInput.addEventListener("input", () => {
    const q = searchInput.value.trim().toLowerCase();

    cards.forEach(card => {
      const title = (card.dataset.title || card.querySelector("h3")?.textContent || "").toLowerCase();
      const matches = title.includes(q);
      card.style.display = matches ? "" : "none";
    });
  });
}

//Contact form validation
const contactForm = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

if (contactForm && formMsg) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = contactForm.querySelector('input[type="text"]')?.value.trim() || "";
        const email = contactForm.querySelector('input[type="email"]')?.value.trim() || "";
        const message = contactForm.querySelector("textarea")?.value.trim() || "";

        const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        if (!name || !email || !message) {
            showMsg("Please fill out all fields.", false);
            return;
        }
        if (!emailOk) {
            showMsg("Please enter a valid email address.", false);
            return;
        }
    })       
}