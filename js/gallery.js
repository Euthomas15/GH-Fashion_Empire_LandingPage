/*==================================================
                PORTFOLIO FILTER
==================================================*/

const filterButtons = document.querySelectorAll(".portfolio-filter button");

const portfolioCards = document.querySelectorAll(".portfolio-card");

/*==================================================
            VISIBLE PORTFOLIO CARDS
==================================================*/

// Stores the cards currently visible in the gallery.
// By default, all cards are visible.
let visibleCards = [...portfolioCards];


/*==================================================
            FILTER PORTFOLIO CARDS
==================================================*/

function filterPortfolio(filter) {

    portfolioCards.forEach((card) => {

        // Show every card.
        if (filter === "all") {

            card.classList.remove("hide");

            card.style.display = "block";

        }

        // Show only matching cards.
        else if (card.classList.contains(filter)) {

            card.style.display = "block";

            setTimeout(() => {

                card.classList.remove("hide");

            }, 20);

        }

        // Hide all other cards.
        else {

            card.classList.add("hide");

            setTimeout(() => {

                card.style.display = "none";

            }, 300);

        }

    });

}


filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        // Get the selected filter.
        const filter = button.dataset.filter;


    
    // Highlight the selected filter button.
    updateActiveButton(button);

    
    // Update the array of visible portfolio cards.
    updateVisibleCards(filter);

    /*==================================================
            UPDATE ACTIVE FILTER BUTTON
    ==================================================*/

    // Highlight the selected filter button.
    function updateActiveButton(button) {

        // Remove the active class from every button.
        filterButtons.forEach((btn) => {

            btn.classList.remove("active");

        });

        // Highlight the clicked button.
        button.classList.add("active");

    }

    // Show or hide portfolio cards.
    filterPortfolio(filter);


    // Filter the portfolio cards.
    filterPortfolio(filter);
    


    /*==================================================
        UPDATE VISIBLE PORTFOLIO CARDS
    ==================================================*/

    // Update the array of cards that are currently visible.
    function updateVisibleCards(filter) {

        if (filter === "all") {

            // Show every portfolio card.
            visibleCards = [...portfolioCards];

        } else {

            // Keep only cards that belong to the selected category.
            visibleCards = [...portfolioCards].filter((card) => {

                return card.classList.contains(filter);

            });

        }

    }

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

// Loop through every portfolio card
portfolioCards.forEach((card, index) => {

    // Listen for a click on the current card
    card.addEventListener("click", () => {

        // Remember which card was clicked
        // currentImageIndex = index;

        // Remember which visible image was clicked
        currentImageIndex = visibleCards.indexOf(card);

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
// document.addEventListener("keydown", (event) => {

//     // Check if the Escape key was pressed
//     if (event.key === "Escape") {

//         // Hide the lightbox
//         lightbox.classList.remove("active");

//     }

// });

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
    if (currentImageIndex >= visibleCards.length) {

        currentImageIndex = 0;

    }

    // Find the image inside the current portfolio card
    
    // const image = portfolioCards[currentImageIndex].querySelector("img");

    const image = visibleCards[currentImageIndex].querySelector("img");

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

        // currentImageIndex = portfolioCards.length - 1;
        currentImageIndex = visibleCards.length - 1;

    }

    // Find the image inside the current portfolio card

    // const image = portfolioCards[currentImageIndex].querySelector("img");
    
    const image = visibleCards[currentImageIndex].querySelector("img");


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

/*==================================================
            PORTFOLIO SCROLL REVEAL
==================================================*/

// Create an observer that watches portfolio cards
// as they enter and leave the viewport.
const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        // If the card enters the viewport...
        if (entry.isIntersecting) {

            // Wait a little before showing the card.
            setTimeout(() => {

                entry.target.classList.add("show");

            }, animationDelay);

            // Increase the delay for the next card.
            animationDelay += 40;

        }

        // If the card leaves the viewport...
        else {

            // Hide the card.
            entry.target.classList.remove("show");

            // Reset the delay so the next visible group
            // starts from the beginning.
            animationDelay = 0;

        }

    });

}, {

    // Start the animation when about 15% of the card
    // becomes visible.
    threshold: 0.15

});

// Counter used to stagger cards as they appear.
let animationDelay = 0;

// Observe every portfolio card.
portfolioCards.forEach((card) => {

    revealObserver.observe(card);

});