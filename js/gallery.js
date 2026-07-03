/*==================================================
                PORTFOLIO FILTER
==================================================*/

const filterButtons = document.querySelectorAll(".portfolio-filter button");

const portfolioCards = document.querySelectorAll(".portfolio-card");

// filterButtons.forEach((button) => {

//     button.addEventListener("click", () => {

//         console.log(button.dataset.filter);

//     });

// });

filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const filter = button.dataset.filter;

        console.log(filter);

        filterButtons.forEach((btn) => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

        portfolioCards.forEach((card) => {

            if (filter === "all") {

                card.classList.remove("hide");

                card.style.display = "block";

            }

            else if (card.classList.contains(filter)) {

                card.style.display = "block";

                setTimeout(() => {

                    card.classList.remove("hide");

                }, 20);

            }

            else {

                card.classList.add("hide");

                setTimeout(() => {

                    card.style.display = "none";

                }, 300);

            }

        });

    });

});

/*==================================================
                PORTFOLIO LIGHTBOX
==================================================*/

const lightbox = document.querySelector(".lightbox");

const lightboxImage = document.querySelector(".lightbox-image");

const lightboxClose = document.querySelector(".lightbox-close");

const lightboxNext = document.querySelector(".lightbox-next");

const lightboxPrev = document.querySelector(".lightbox-prev");


/*==================================================
        OPEN LIGHTBOX WHEN A CARD IS CLICKED
==================================================*/

// portfolioCards.forEach((card) => {

//     card.addEventListener("click", () => {

//         // Find the image inside the clicked card
//         const image = card.querySelector("img");

//         // Copy the image source into the lightbox
//         lightboxImage.src = image.src;

//         // Copy the image description
//         lightboxImage.alt = image.alt;

//         // Show the lightbox
//         lightbox.classList.add("active");

//     });

// });


/*==================================================
        OPEN LIGHTBOX WHEN A CARD IS CLICKED
==================================================*/

// Loop through every portfolio card
portfolioCards.forEach((card, index) => {

    // Listen for a click on the current card
    card.addEventListener("click", () => {

        // Remember which card was clicked
        currentImageIndex = index;

        // Get the image inside the clicked card
        const image = card.querySelector("img");

        // Display the image inside the lightbox
        lightboxImage.src = image.src;

        lightboxImage.alt = image.alt;

        // Show the lightbox
        lightbox.classList.add("active");

    });

});

/*==================================================
            CLOSE LIGHTBOX
==================================================*/

lightboxClose.addEventListener("click", () => {

    // Hide the lightbox
    lightbox.classList.remove("active");

});

/*==================================================
    CLOSE LIGHTBOX WHEN CLICKING THE BACKGROUND
==================================================*/

// Listen for clicks on the entire lightbox
lightbox.addEventListener("click", (event) => {

    // Only close if the user clicked the dark background,
    // not the image or the buttons.
    if (event.target === lightbox) {

        // Hide the lightbox
        lightbox.classList.remove("active");

    }

});

/*==================================================
        CLOSE LIGHTBOX WITH ESC KEY
==================================================*/

// Listen for every key pressed on the keyboard
document.addEventListener("keydown", (event) => {

    // Check if the Escape key was pressed
    if (event.key === "Escape") {

        // Hide the lightbox
        lightbox.classList.remove("active");

    }

});

/*==================================================
        CURRENT IMAGE INDEX
==================================================*/

// Stores the position of the image currently
// displayed in the lightbox.
let currentImageIndex = 0;

/*==================================================
            SHOW NEXT IMAGE
==================================================*/

// Listen for a click on the Next button
lightboxNext.addEventListener("click", () => {

    // Move to the next image
    currentImageIndex++;

    // If we've reached the last image,
    // go back to the first one.
    if (currentImageIndex >= portfolioCards.length) {

        currentImageIndex = 0;

    }

    // Find the image inside the current portfolio card
    const image = portfolioCards[currentImageIndex].querySelector("img");

    // Update the lightbox image
    lightboxImage.src = image.src;

    lightboxImage.alt = image.alt;

});

/*==================================================
            SHOW PREVIOUS IMAGE
==================================================*/

// Listen for a click on the Previous button
lightboxPrev.addEventListener("click", () => {

    // Move to the previous image
    currentImageIndex--;

    // If we've gone before the first image,
    // jump to the last image.
    if (currentImageIndex < 0) {

        currentImageIndex = portfolioCards.length - 1;

    }

    // Find the image inside the current portfolio card
    const image = portfolioCards[currentImageIndex].querySelector("img");

    // Update the lightbox image
    lightboxImage.src = image.src;

    lightboxImage.alt = image.alt;

});

/*==================================================
            KEYBOARD NAVIGATION
==================================================*/

// Listen for every key pressed on the keyboard
document.addEventListener("keydown", (event) => {

    // Do nothing if the lightbox is closed
    if (!lightbox.classList.contains("active")) return;

    // Close the lightbox
    if (event.key === "Escape") {

        lightbox.classList.remove("active");

    }

    // Show the next image
    if (event.key === "ArrowRight") {

        lightboxNext.click();

    }

    // Show the previous image
    if (event.key === "ArrowLeft") {

        lightboxPrev.click();

    }

});