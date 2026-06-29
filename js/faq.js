 /* ==========================================
   FAQ ACCORDION
  ========================================== */

  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {

      item.addEventListener("toggle", () => {

          if (item.open) {

              faqItems.forEach(otherItem => {

                  if (otherItem !== item) {

                      otherItem.removeAttribute("open");

                  }

              });

          }

      });

  });