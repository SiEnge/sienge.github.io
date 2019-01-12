var slideServices = document.querySelectorAll(".services__slider .slider__item");
var slideFeedback = document.querySelectorAll(".feedback__slider .slider__item");

var currentSlideServices = 0;
var currentSlideFeedback = 0;

var slideInterval = setInterval(nextSlide,5000);
var playing = true;

var next = document.getElementById("next");
var prev = document.getElementById("prev");

var next_f = document.getElementById("next_f");
var prev_f = document.getElementById("prev_f");

var controls = document.querySelectorAll(".controls__button");


for(var i=0; i<controls.length; i++) {
  controls[i].style.display = "inline-block";
}

function goToSlide(n) {
  slideServices[currentSlideServices].className = "slider__item";
  currentSlideServices = (n+slideServices.length)%slideServices.length;
  slideServices[currentSlideServices].className = "slider__item slider__item--showing";
}



function nextSlide() {
  goToSlide(currentSlideServices+1);
}

function previousSlide() {
  goToSlide(currentSlideServices-1);
}

function goToSlide_f(n) {
  slideFeedback[currentSlideFeedback].className = "slider__item";
  currentSlideFeedback = (n+slideFeedback.length)%slideFeedback.length;
  slideFeedback[currentSlideFeedback].className = "slider__item slider__item--showing";
}

next.onclick = function() {
  nextSlide();
}

prev.onclick =  function() {
  previousSlide();
}



function nextSlide_f() {
  goToSlide_f(currentSlideFeedback+1);
}

function previousSlide_f() {
  goToSlide_f(currentSlideFeedback-1);
}

next_f.onclick = function() {
  nextSlide_f();
}

prev_f.onclick =  function() {
  previousSlide_f();
}

var nav = document.querySelector('.nav');
var navBtn = document.querySelector('.nav__button');

nav.classList.remove('nav--nojs');

navBtn.addEventListener('click', function () {
  if (nav.classList.contains('nav--closed')) {
    nav.classList.remove('nav--closed');
    nav.classList.add('nav--opened');
  } else {
    nav.classList.remove('nav--opened');
    nav.classList.add('nav--closed');
  }
});
