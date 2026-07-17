document.getElementById("current-year").textContent = new Date().getFullYear();

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
