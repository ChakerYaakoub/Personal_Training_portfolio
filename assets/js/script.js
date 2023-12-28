"use strict";

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

/**
 * toggle navbar
 */

const navbar = document.querySelector("[data-navbar]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
};

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
};

addEventOnElem(navLinks, "click", closeNavbar);

/**
 * header active
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

// Function to handle sending a WhatsApp message
const sendWhatsAppMessage = (packageName) => {
  let phoneNumber = "+96170178399";
  let message = `Hello, I'm interested in the *${packageName}* package. Can you provide more details?`;
  let whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
    message
  )}`;
  window.open(whatsappURL);
};

// const handleWhatsApp = (text) => {
//   sendWhatsAppMessage(text);
// };

// // Add event listener to the packages list
// document.getElementById("packages").addEventListener("click", function (event) {
//   console.log(event.target.dataset);
//   if (event.target.dataset.package) {
//     let packageName = event.target.dataset.package;
//     sendWhatsAppMessage(packageName);
//   }
// });

// // Add event listener to the session list
// document.addEventListener("click", function (event) {
//   if (event.target.dataset.package) {
//     let packageName = event.target.dataset.package;
//     sendWhatsAppMessage(packageName);
//   }
// });
