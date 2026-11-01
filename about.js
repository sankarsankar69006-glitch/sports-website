
/* =====================================
   MOBILE NAVBAR
===================================== */

const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");

if (menuIcon && navLinks) {

    menuIcon.addEventListener("click", function () {

        navLinks.classList.toggle("show");

        if (navLinks.classList.contains("show")) {
            menuIcon.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        } else {
            menuIcon.innerHTML = '<i class="fa-solid fa-bars"></i>';
        }

    });

    document.querySelectorAll(".nav-links a").forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("show");

            menuIcon.innerHTML = '<i class="fa-solid fa-bars"></i>';

        });

    });

}


/* =====================================
   CONTACT FORM - SUCCESS POPUP ONLY
===================================== */

const contactForm = document.getElementById("contactForm");
const sendBtn = document.getElementById("sendBtn");
const formPopup = document.getElementById("formPopup");
const popupMessage = document.getElementById("popupMessage");

if (contactForm && sendBtn && formPopup && popupMessage) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        }

        // Hide form
        contactForm.style.display = "none";

        // Show success popup
        popupMessage.innerHTML =
            'Message Sent Successfully!';

        formPopup.classList.remove("error");
        formPopup.classList.add("show");

        // After 5 seconds show form again
        setTimeout(function () {

            formPopup.classList.remove("show");

            contactForm.reset();
            contactForm.style.display = "block";

        }, 6000);

    });

}