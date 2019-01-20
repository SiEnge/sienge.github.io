//Прилипание шапки при прокрутке

var HeaderFixed = (function() {

    var docElem = document.documentElement,
        header = document.querySelector( '.header' ),
        didScroll = false,
        changeHeaderOn = 300;

    function init() {
        window.addEventListener( 'scroll', function( event ) {
            if( !didScroll ) {
                didScroll = true;
                setTimeout( scrollPage, 250 );
            }
        }, false );
    }

    function scrollPage() {
        var sy = scrollY();
        if ( sy >= changeHeaderOn ) {
            header.classList.add('header--min' );
        }
        else {
            header.classList.remove('header--min' );
        }
        didScroll = false;
    }

    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }

    init();

})();


//Обработка события клика на "бургер" навигации. При клике разворачивается меню

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

//Обработка клика для выпадающего подменю
var navSub = document.querySelector('.nav__item--sub');
var navSubList = document.querySelector('.nav__sublist');

navSub.addEventListener('click', function () {
  if (navSub.classList.contains('nav__item--subclose')) {
    navSub.classList.remove('nav__item--subclose');
    navSub.classList.add('nav__item--subopen');
  } else {
    navSub.classList.remove('nav__item--subopen');
    navSub.classList.add('nav__item--subclose');
  }
});

//Обработка клика для выпадающего подменю в левой колонке
var navSub = document.querySelector('.product__item--sub');
var navSubList = document.querySelector('.product__sublist');

navSub.addEventListener('click', function () {
  if (navSub.classList.contains('product__item--subclose')) {
    navSub.classList.remove('product__item--subclose');
    navSub.classList.add('product__item--subopen');
  } else {
    navSub.classList.remove('product__item--subopen');
    navSub.classList.add('product__item--subclose');
  }
});






//Обработка событий клика в блоке "Cпецпредложения":
//      - меняются слайды
//      - меняется цвет контролов под фото

var slideGift = document.querySelectorAll(".gift__slider .slider__item");
var nextGift = document.querySelector(".gift__arrow--right");
var prevGift = document.querySelector(".gift__arrow--left");
var controlsGift = document.querySelectorAll('.gift__controls .controls__radio');

var currentSlideGift = 0;

nextGift.addEventListener('click', function () {
  nextSlideGift = (currentSlideGift + 1 + slideGift.length)%slideGift.length;

  slideGift[currentSlideGift].classList.remove("slider__item--showing");
  slideGift[nextSlideGift].classList.add("slider__item--showing");

  controlsGift[currentSlideGift].classList.remove("controls__radio--active");
  controlsGift[nextSlideGift].classList.add("controls__radio--active");

  currentSlideGift = nextSlideGift;

  if (currentSlideGift == 0) {
    prevGift.classList.remove('gift__arrow--active');
  } else {
    prevGift.classList.add('gift__arrow--active');
  }
  if (currentSlideGift == slideGift.length-1 ) {
    nextGift.classList.remove('gift__arrow--active');
  } else {
    nextGift.classList.add('gift__arrow--active');
  }
});

prevGift.addEventListener('click', function () {
  prevSlideGift = (currentSlideGift - 1 + slideGift.length)%slideGift.length;

  slideGift[currentSlideGift].classList.remove("slider__item--showing");
  slideGift[prevSlideGift].classList.add("slider__item--showing");

  controlsGift[currentSlideGift].classList.remove("controls__radio--active");
  controlsGift[prevSlideGift].classList.add("controls__radio--active");

  currentSlideGift = prevSlideGift;

  if (currentSlideGift == 0) {
    prevGift.classList.remove('arrow--active');
  } else {
    prevGift.classList.add('arrow--active');
  }
  if (currentSlideGift == slideGift.length - 1) {
    nextGift.classList.remove('arrow--active');
  } else {
    nextGift.classList.add('arrow--active');
  }
});


//Обработка событий клика в блоке "Лучшие предложения":
//      - меняются слайды
//      - меняется цвет стрелок
//      - меняется цвет контролов под фото

var slideOffer = document.querySelectorAll(".offers__slider .slider__item");
var nextOffer = document.querySelector(".offers__arrow .arrow--right");
var prevOffer = document.querySelector(".offers__arrow .arrow--left");
var controlsOffer = document.querySelectorAll('.offers__controls .controls__radio');

var currentSlideOffer = 0;

nextOffer.addEventListener('click', function () {
  nextSlideOffer = (currentSlideOffer + 1 + slideOffer.length)%slideOffer.length;

  slideOffer[currentSlideOffer].classList.remove("slider__item--showing");
  slideOffer[nextSlideOffer].classList.add("slider__item--showing");

  controlsOffer[currentSlideOffer].classList.remove("controls__radio--active");
  controlsOffer[nextSlideOffer].classList.add("controls__radio--active");

  currentSlideOffer = nextSlideOffer;

  if (currentSlideOffer == 0) {
    prevOffer.classList.remove('arrow--active');
  } else {
    prevOffer.classList.add('arrow--active');
  }
  if (currentSlideOffer == slideOffer.length-1 ) {
    nextOffer.classList.remove('arrow--active');
  } else {
    nextOffer.classList.add('arrow--active');
  }

});

prevOffer.addEventListener('click', function () {
  prevSlideOffer = (currentSlideOffer - 1 + slideOffer.length)%slideOffer.length;

  slideOffer[currentSlideOffer].classList.remove("slider__item--showing");
  slideOffer[prevSlideOffer].classList.add("slider__item--showing");

  controlsOffer[currentSlideOffer].classList.remove("controls__radio--active");
  controlsOffer[prevSlideOffer].classList.add("controls__radio--active");

  currentSlideOffer = prevSlideOffer;

  if (currentSlideOffer == 0) {
    prevOffer.classList.remove('arrow--active');
  } else {
    prevOffer.classList.add('arrow--active');
  }
  if (currentSlideOffer == slideOffer.length - 1) {
    nextOffer.classList.remove('arrow--active');
  } else {
    nextOffer.classList.add('arrow--active');
  }
});


//Обработка событий клика в блоке "Отзывы":
//      - меняются слайды
//      - меняется цвет стрелок


var slideFeedback = document.querySelectorAll(".feedback__slider .slider__item");
var nextFeedback = document.querySelector(".feedback__arrow .arrow--right");
var prevFeedback = document.querySelector(".feedback__arrow .arrow--left");


var currentSlideFeedback = 0;

nextFeedback.addEventListener('click', function () {
  nextSlideFeedback = (currentSlideFeedback + 1 + slideFeedback.length)%slideFeedback.length;

  slideFeedback[currentSlideFeedback].classList.remove("slider__item--showing");
  slideFeedback[nextSlideFeedback].classList.add("slider__item--showing");


  currentSlideFeedback = nextSlideFeedback;

  if (currentSlideFeedback == 0) {
    prevFeedback.classList.remove('arrow--active');
  } else {
    prevFeedback.classList.add('arrow--active');
  }
  if (currentSlideFeedback == slideFeedback.length-1 ) {
    nextFeedback.classList.remove('arrow--active');
  } else {
    nextFeedback.classList.add('arrow--active');
  }

});

prevFeedback.addEventListener('click', function () {
  prevSlideFeedback = (currentSlideFeedback - 1 + slideFeedback.length)%slideFeedback.length;

  slideFeedback[currentSlideFeedback].classList.remove("slider__item--showing");
  slideFeedback[prevSlideFeedback].classList.add("slider__item--showing");

  currentSlideFeedback = prevSlideFeedback;

  if (currentSlideFeedback == 0) {
    prevFeedback.classList.remove('arrow--active');
  } else {
    prevFeedback.classList.add('arrow--active');
  }
  if (currentSlideFeedback == slideFeedback.length - 1) {
    nextFeedback.classList.remove('arrow--active');
  } else {
    nextFeedback.classList.add('arrow--active');
  }

});
