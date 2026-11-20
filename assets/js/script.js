const header = document.querySelector("#site-header");
const footer = document.querySelector("#site-footer");
const page = window.location.pathname.split("/").pop() || "Index.html";

if (header) {
  header.innerHTML = `
    <div class="topbar"><div class="container topbar-inner">
      <span>Welcome to Kabankalan Catholic College</span>
      <div class="topbar-links"><a href="contact.html">Student Services</a><a href="trainers.html">Faculty</a><a href="contact.html">Contact</a></div>
    </div></div>
    <header class="main-header"><div class="container header-inner">
      <a class="brand" href="Index.html"><span class="brand-mark">KCC</span><span class="brand-name">Kabankalan Catholic College</span></a>
      <nav aria-label="Main navigation"><ul class="nav-list" id="navList">
        <li><a href="Index.html" data-page="Index.html">Home</a></li>
        <li><a href="about.html" data-page="about.html">About</a></li>
        <li><a href="courses.html" data-page="courses.html">Programs</a></li>
        <li><a href="events.html" data-page="events.html">Campus Life</a></li>
        <li><a href="contact.html" data-page="contact.html">Contact</a></li>
      </ul></nav>
      <div class="header-actions"><a class="btn btn-primary" href="contact.html">Inquire Now</a><button class="menu-toggle" type="button" aria-label="Open menu" aria-controls="navList" aria-expanded="false"><span></span><span></span><span></span></button></div>
    </div></header>`;

  const current = document.querySelector(`[data-page="${page}"], [data-page="Index.html"]`);
  if (page.toLowerCase() === "index.html") {
    document.querySelector('[data-page="Index.html"]')?.classList.add("active");
  } else {
    current?.classList.add("active");
  }

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#navList");
  toggle?.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

if (footer) {
  footer.innerHTML = `<footer><div class="container"><div class="footer-grid">
    <div><div class="footer-brand">Kabankalan Catholic College</div><p class="footer-about">A learning community formed in faith and committed to excellence, leadership, and service.</p></div>
    <div><h3>Explore</h3><ul class="footer-links"><li><a href="about.html">About KCC</a></li><li><a href="courses.html">Programs</a></li><li><a href="events.html">Campus Life</a></li></ul></div>
    <div><h3>Connect</h3><ul class="footer-links"><li><a href="contact.html">Contact Us</a></li><li><a href="trainers.html">Faculty</a></li><li><a href="pricing.html">Tuition</a></li></ul></div>
  </div><div class="copyright">&copy; 2026 Kabankalan Catholic College. All rights reserved.</div></div></footer>`;
}

document.querySelector("#contactForm")?.addEventListener("submit", (event) => {
  event.preventEvent?.();
  event.preventDefault();
  document.querySelector(".form-status").textContent = "Thank you. Your inquiry has been prepared.";
  event.currentTarget.reset();
});
