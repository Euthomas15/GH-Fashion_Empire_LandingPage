  // === LOADER ===
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.getElementById('loader').classList.add('hidden');
    }, 2000);
  });

  // === NAV SCROLL ===
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });

  // === MOBILE MENU ===
  // function openMobileMenu() { document.getElementById('mobileMenu').classList.add('open'); }
  // function closeMobileMenu() { document.getElementById('mobileMenu').classList.remove('open'); }

  // === SCROLL REVEAL ===
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => revealObserver.observe(el));