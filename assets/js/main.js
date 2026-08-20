// Theme: respect saved preference or system setting
(function () {
  var root = document.documentElement;
  var saved = localStorage.getItem("theme");
  var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (saved === "dark" || (!saved && prefersDark)) {
    root.setAttribute("data-theme", "dark");
  }

  var toggle = document.getElementById("theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var isDark = root.getAttribute("data-theme") === "dark";
      root.setAttribute("data-theme", isDark ? "light" : "dark");
      localStorage.setItem("theme", isDark ? "light" : "dark");
    });
  }
})();

// Reveal elements on scroll
(function () {
  var items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach(function (el) { el.classList.add("is-visible"); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach(function (el) { io.observe(el); });
})();

// Current year in footer
(function () {
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
