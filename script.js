document.getElementById("current-year").textContent = new Date().getFullYear();

const themeToggle = document.querySelector(".theme-toggle");
const themeIcon = themeToggle?.querySelector(".theme-toggle-icon");
const themeLabel = themeToggle?.querySelector(".theme-toggle-label");
const systemTheme = window.matchMedia("(prefers-color-scheme: light)");

function getPreferredTheme() {
  const savedTheme = localStorage.getItem("portfolio-theme");
  return savedTheme === "light" || savedTheme === "dark"
    ? savedTheme
    : (systemTheme.matches ? "light" : "dark");
}

function applyTheme(theme) {
  const isLight = theme === "light";
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;

  if (themeToggle) {
    themeToggle.setAttribute("aria-pressed", String(isLight));
    themeToggle.setAttribute("aria-label", `Switch to ${isLight ? "dark" : "light"} mode`);
  }
  if (themeIcon) themeIcon.textContent = isLight ? "☾" : "☀";
  if (themeLabel) themeLabel.textContent = isLight ? "Dark" : "Light";
}

applyTheme(getPreferredTheme());

themeToggle?.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "light" ? "dark" : "light";
  localStorage.setItem("portfolio-theme", nextTheme);
  applyTheme(nextTheme);
});

systemTheme.addEventListener("change", (event) => {
  if (!localStorage.getItem("portfolio-theme")) {
    applyTheme(event.matches ? "light" : "dark");
  }
});

const observed = document.querySelectorAll(".impact-story, .achievement-card, .timeline-item, .system-group, .article-card");
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.documentElement.classList.add("motion-ready");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  observed.forEach((element) => observer.observe(element));
}
