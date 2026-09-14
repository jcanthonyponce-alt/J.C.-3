// ===== MOBILE MENU TOGGLE =====
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("show");
});



// Close menu when a link is clicked (mobile)
const allLinks = document.querySelectorAll("#nav-links a");
allLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("show");
  });
});



// ===== CONTACT FORM =====
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault(); // stop the form from refreshing the page

  const name = document.getElementById("name").value;

  formStatus.textContent = "Thank you, " + name + "! Your message has been received.";

  contactForm.reset();
});
