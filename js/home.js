  // === LOADER ===
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.getElementById('loader').classList.add('hidden');
    }, 600);
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

  // =====================================
  // VIDEO MODAL
  // =====================================

  const previews = document.querySelectorAll(".video-preview");

  const modal = document.querySelector(".video-modal");

  const popupVideo = document.getElementById("popupVideo");

  const source = popupVideo.querySelector("source");

  const closeVideo = document.querySelector(".close-video");


  previews.forEach(preview=>{

      preview.addEventListener("click",()=>{

          source.src = preview.dataset.video;

          popupVideo.load();

          modal.classList.add("show");

          popupVideo.play();

      });

  });


  function closePlayer(){

      popupVideo.pause();

      popupVideo.currentTime = 0;

      modal.classList.remove("show");

  }


  closeVideo.addEventListener("click",closePlayer);


  modal.addEventListener("click",(e)=>{

      if(e.target===modal){

          closePlayer();

      }

  });


  popupVideo.addEventListener("ended",closePlayer);
  