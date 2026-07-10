/*==================================================
            LUCIDE ICONS
==================================================*/

lucide.createIcons();

/*==================================================
        EMAILJS INITIALIZATION
==================================================*/

emailjs.init("xV9FicIJZkt-JbBMq");

/*==================================================
            TRAINING FORM
==================================================*/

const trainingForm = document.getElementById("training-form");
const submitBtn = document.getElementById("submit-btn");
const successBox = document.getElementById("training-success");

trainingForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const age = document.getElementById("age").value.trim();
    const program = document.getElementById("program").value;
    const experience = document.getElementById("experience").value;
    const message = document.getElementById("message").value.trim();

    submitBtn.disabled = true;
    submitBtn.textContent = "Submitting...";

    emailjs.send(
        "service_dpy48qh",
        "template_ec3bqpr",
        {
            fullName,
            email,
            phone,
            age,
            program,
            experience,
            message
        }
    )

    .then(() => {

        trainingForm.style.display = "none";

        successBox.style.display = "block";

    })

    .catch((error) => {

        console.error(error);

        alert("Registration failed. Please try again.");

        submitBtn.disabled = false;

        submitBtn.textContent = "Register Now →";

    });

});