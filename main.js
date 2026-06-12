document.addEventListener("DOMContentLoaded", () => {
    // ── Hamburger / Mobile Nav Toggle ──────────────────────────────
    const hamburger = document.querySelector(".hamburger");
    const navLinks  = document.querySelector(".nav-links");
    if (hamburger && navLinks) {
      hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("active");
      });
    } else {
      console.warn("🍔 Hamburger or nav‑links not found");
    }
  
    // ── Hero Cursor‑Follow Circle ──────────────────────────────────
    const banner   = document.querySelector(".banner-two-column");
    const follower = banner?.querySelector(".shape-deco");
    if (banner && follower) {
        let isFrozen = false;

              // Toggle frozen state on click
              banner.addEventListener("click", () => {
                isFrozen = !isFrozen;
                // (optional) change opacity to hint freeze
                follower.style.opacity = isFrozen ? "0.6" : "1";
              });
        
    
      banner.addEventListener("mousemove", e => {
        if (isFrozen) return;  // do nothing if frozen
        const { left, top } = banner.getBoundingClientRect();
        const x = e.clientX - left  - follower.offsetWidth  / 2;
        const y = e.clientY - top   - follower.offsetHeight / 2;
        follower.style.left = `${x}px`;
        follower.style.top  = `${y}px`;
      });
      banner.addEventListener("mouseleave", () => {
        follower.style.left = "40%";
        follower.style.top  = "70%";
      });
    } else {
                if (!isFrozen) {
            follower.style.left = "0px";
            follower.style.top  = "0px";
            }
      console.warn("🎯 Banner or shape‑deco not found", banner, follower);
    }
  });
const logo = document.querySelector(".logo");
const img = document.querySelector(".logo-img");

logo.addEventListener("click", (e) => {
  e.preventDefault();

  // restart animation
  img.classList.remove("logo-clicked");
  void img.offsetWidth;
  img.classList.add("logo-clicked");

  // smooth scroll to home after animation starts
  setTimeout(() => {
    document.querySelector("#home")
      ?.scrollIntoView({
        behavior: "smooth"
      });
  }, 250);
});

const carouselFigures = document.querySelectorAll("#carousel figure");

carouselFigures.forEach((figure, index) => {
  const angle = (360 / carouselFigures.length) * index;
  figure.style.transform = `rotateY(${angle}deg) translateZ(500px)`;
}); 