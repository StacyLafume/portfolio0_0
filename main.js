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
  