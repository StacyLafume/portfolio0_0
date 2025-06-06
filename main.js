document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks  = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
      /* 1. Toggle “active” on the ul.nav-links */
      navLinks.classList.toggle('active');

      /* 2. Toggle “active” on the hamburger to animate bars */
      hamburger.classList.toggle('active');
    });
  });