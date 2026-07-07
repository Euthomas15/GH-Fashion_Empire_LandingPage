 /*==================================================
            INITIALIZE EMAILJS
==================================================*/

// Initialize EmailJS with your Public Key.
emailjs.init({

    publicKey: "xV9FicIJZkt-JbBMq"

});
 
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


/*==================================================
            SCROLL REVEAL
==================================================*/

// Select every element that should animate.
const revealEls = document.querySelectorAll(".reveal");

// Watch elements as they enter and leave the viewport.
const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        // Element enters the viewport.
        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

        }

        // Element leaves the viewport.
        else {

            entry.target.classList.remove("visible");

        }

    });

}, {

    // Trigger when about 12% of the element is visible.
    threshold: 0.12

});

// Observe every reveal element.
revealEls.forEach((el) => {

    revealObserver.observe(el);

});


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
  
  
// Automatically displays the current year in the footer.
// This prevents manually updating the copyright year every year.
const currentYear = document.getElementById("current-year");

currentYear.textContent = new Date().getFullYear();

/*==================================================
            CONTACT FORM
==================================================*/

// Get the contact form.
const contactForm = document.getElementById("contact-form");

// Get the submit button.
const submitButton = document.getElementById("submit-btn");


/*==================================================
        CONTACT FORM SUBMIT EVENT
==================================================*/

// Listen for the form submission.
contactForm.addEventListener("submit", (event) => {

    // Prevent the browser from refreshing the page.
    event.preventDefault();

    /*==============================================
            GET FORM VALUES
  ==================================================*/

  // Get the user's full name.
  const fullName = document.getElementById("fullName").value.trim();

  // Get the user's email address.
  const email = document.getElementById("email").value.trim();

  // Get the user's phone number.
  const phone = document.getElementById("phone").value.trim();

  // Get the selected service.
  const service = document.getElementById("service").value.trim();

  // Get the user's message.
  const message = document.getElementById("message").value.trim();


  /*================================================
              VALIDATE EMPTY FIELDS
  ==================================================*/

  // Check if any field is empty.
  if (

      fullName === "" ||

      email === "" ||

      phone === "" ||

      service === "" ||

      message === ""

  ) {

      alert("Please fill in all fields before submitting the form.");

      // Stop the form submission.
      return;

  }

  /*================================================
            VALIDATE EMAIL ADDRESS
  ==================================================*/

  // Regular expression used to check if the email format is valid.
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check if the email matches the required format.
  if (!emailPattern.test(email)) {

      alert("Please enter a valid email address.");

      // Stop the form submission.
      return;

  }

  /*==================================================
            VALIDATE PHONE NUMBER
  ==================================================*/

  // Regular expression used to validate phone numbers.
  const phonePattern = /^\+?[0-9]{10,15}$/;

  // Check if the phone number is valid.
  if (!phonePattern.test(phone)) {

      alert("Please enter a valid phone number.");

      // Stop the form submission.
      return;

  }

  /*================================================
              TEST PASSED VALIDATION
  ==================================================*/

  // This only runs if every field has been completed.
  // console.log("All fields are filled.");

  /*==================================================
                  SEND EMAIL
  ==================================================*/

  // Send the form data to EmailJS.
  emailjs.send(

      "service_dpy48qh",

      "template_8bjl09f",

      {

          fullName: fullName,

          email: email,

          phone: phone,

          service: service,

          message: message

      }

  )

  // Email sent successfully.
  .then(() => {

      // Clear every field after sending.
      contactForm.reset();

      /*==================================================
              SHOW SUCCESS MESSAGE
      ==================================================*/

      // Hide the contact form.
      contactForm.style.display = "none";

      // Show the success message.
      document.getElementById("form-success").style.display = "block";

  })

  // Something went wrong.
  .catch((error) => {

      console.error(error);

      alert("Sorry, something went wrong. Please try again.");

  });

});

