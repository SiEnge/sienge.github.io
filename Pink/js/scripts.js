var navMenu = document.querySelector(".main-menu");
var navToggle = document.querySelector(".main-menu__burger");

navMenu.classList.remove("main-menu--nojs");

navToggle.addEventListener("click", function() {
  if (navMenu.classList.contains("main-menu--closed")) {
    navMenu.classList.remove("main-menu--closed");
    navMenu.classList.add("main-menu--opened");
  } else {
    navMenu.classList.add("main-menu--closed");
    navMenu.classList.remove("main-menu--opened");
  }
});
