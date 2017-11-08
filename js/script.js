var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

var modalOverlay = document.querySelector(".modal__wrapper");
var modalWindow = document.getElementById("modal");
var modalOpen = document.querySelectorAll(".js-add-to-cart");

for (var i = 0; i < modalOpen.length; i++) modalOpen[i].addEventListener("click", function(event) {
  event.preventDefault();
  modalWindow.classList.remove("visually-hidden");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    modalWindow.classList.add("visually-hidden");
  }
});

modalWindow.addEventListener("click", function(event) {
  event.preventDefault();
  modalWindow.classList.add("visually-hidden");
});

modalOverlay.addEventListener("click", function(event) {
  event.stopPropagation();
});
