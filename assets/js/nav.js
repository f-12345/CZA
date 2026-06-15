(function () {
  const btn = document.querySelector(".hamburger");

  // Works whether you used aria-label or not
  const nav =
    document.querySelector(".nav[aria-label='Primary']") ||
    document.querySelector("nav.nav");

  if (btn && nav) {
    btn.addEventListener("click", () => {
      const isOpen = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!isOpen));
      nav.classList.toggle("open");
    });
  }

  // Dropdown triggers
  const triggers = document.querySelectorAll("[data-dd='true']");

  triggers.forEach((t) => {
    t.addEventListener("click", (e) => {
      e.preventDefault();

      const parent = t.closest(".has-dd");
      if (!parent) return;

      const alreadyOpen = parent.classList.contains("open");
      document.querySelectorAll(".has-dd.open").forEach((x) => x.classList.remove("open"));
      if (!alreadyOpen) parent.classList.add("open");
    });
  });

  // click outside closes dropdown
  document.addEventListener("click", (e) => {
    const inside = e.target.closest(".has-dd");
    if (!inside) {
      document.querySelectorAll(".has-dd.open").forEach((x) => x.classList.remove("open"));
    }
  });
})();
