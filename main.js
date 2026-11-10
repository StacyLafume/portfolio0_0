document.addEventListener("DOMContentLoaded", () => {
    // ── Hamburger / Mobile Nav Toggle ──────────────────────────────
    const hamburger = document.querySelector(".hamburger");
    const navLinks  = document.querySelector(".nav-links");
    if (hamburger && navLinks) {
      hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("active");
      });

      navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          navLinks.classList.remove("active");
          hamburger.classList.remove("active");
        });
      });
    } else {
      console.warn("🍔 Hamburger or nav‑links not found");
    }

    // ── Hero Cursor‑Follow Circle ──────────────────────────────────
    const banner = document.querySelector(".banner-two-column");
    const follower = banner?.querySelector(".shape-deco");

    if (banner && follower) {
      let isFrozen = false;

      banner.addEventListener("click", () => {
        isFrozen = !isFrozen;
        follower.style.opacity = isFrozen ? "0.6" : "1";
      });

      banner.addEventListener("mousemove", e => {
        if (isFrozen) return;
        const { left, top } = banner.getBoundingClientRect();
        const x = e.clientX - left - follower.offsetWidth / 2;
        const y = e.clientY - top - follower.offsetHeight / 2;
        follower.style.left = `${x}px`;
        follower.style.top = `${y}px`;
      });

      banner.addEventListener("mouseleave", () => {
        follower.style.left = "40%";
        follower.style.top = "70%";
      });
    } else {
      console.warn("🎯 Banner or shape‑deco not found", banner, follower);
    }
  });

const logo = document.querySelector(".logo");
const img = document.querySelector(".logo-img");

if (logo && img) {
  logo.addEventListener("click", (e) => {
    e.preventDefault();

    img.classList.remove("logo-clicked");
    void img.offsetWidth;
    img.classList.add("logo-clicked");

    setTimeout(() => {
      document.querySelector("#home")?.scrollIntoView({
        behavior: "smooth"
      });
    }, 250);
  });
}

const carouselFigures = document.querySelectorAll("#carousel figure");

carouselFigures.forEach((figure, index) => {
  const angle = (360 / carouselFigures.length) * index;
  figure.style.transform = `rotateY(${angle}deg) translateZ(500px)`;
}); 