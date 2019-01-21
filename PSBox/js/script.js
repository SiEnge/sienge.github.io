// Слайдеры
$('.gift__slider').slick({
  autoplay: true,
  autoplaySpeed: 3000,
  dots: true,
  pauseOnDotsHover: true,
  zindex: 100,
  responsive: [{
      breakpoint: 1170,
      settings: {
        arrows: false
      }
    }]

});

$('.offers__slider').slick({
  // dots: true,
  fade: true,
  infinite: false,
  zindex: 100
});

$('.feedback__slider').slick({
  infinite: false,
  zindex: 100
});

$('.gallery__slider').slick({
  // infinite: false,
  // zindex: 100
});




//Прилипание шапки при прокрутке

var HeaderFixed = (function() {

    var docElem = document.documentElement,
        header = document.querySelector( ".header" ),
        didScroll = false,
        changeHeaderOn = 400;

    function init() {
        window.addEventListener( "scroll", function( event ) {
            if( !didScroll ) {
                didScroll = true;
                setTimeout( scrollPage, 250 );
            }
        }, false );
    }

    function scrollPage() {
        var sy = scrollY();
        if ( sy >= changeHeaderOn ) {
            header.classList.add("header--min" );
        }
        else {
            header.classList.remove("header--min" );
        }
        didScroll = false;
    }

    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }

    init();

})();


//Обработка события клика на "бургер" навигации. При клике разворачивается меню

var nav = document.querySelector(".nav");
var navBtn = document.querySelector(".nav__button");

nav.classList.remove("nav--nojs");

navBtn.addEventListener("click", function () {
  if (nav.classList.contains("nav--closed")) {
    nav.classList.remove("nav--closed");
    nav.classList.add("nav--opened");
  } else {
    nav.classList.remove("nav--opened");
    nav.classList.add("nav--closed");
  }
});

//Обработка клика для выпадающего подменю
var navSub = document.querySelector(".nav__item--sub");
var navSubList = document.querySelector(".nav__sublist");

navSub.addEventListener("click", function () {
  if (navSub.classList.contains("nav__item--subclose")) {
    navSub.classList.remove("nav__item--subclose");
    navSub.classList.add("nav__item--subopen");
  } else {
    navSub.classList.remove("nav__item--subopen");
    navSub.classList.add("nav__item--subclose");
  }
});

// Обработка события клика на иконку Сравнения в шапке
// Обработка события клика на иконку Корзины в шапке

var icCom = document.querySelector(".header__user-item--compare");
var icPopCom = document.querySelector(".pop--compare");
var icCart = document.querySelector(".header__user-item--cart");
var icPopCart = document.querySelector(".pop--basket");

icCom.addEventListener("click", function () {
  if (icPopCom.classList.contains("pop--active")) {
    icPopCom.classList.remove("pop--active");
  } else {
    icPopCom.classList.add("pop--active");
    icPopCart.classList.remove("pop--active");
  }
});

icCart.addEventListener("click", function () {
  if (icPopCart.classList.contains("pop--active")) {
    icPopCart.classList.remove("pop--active");
  } else {
    icPopCart.classList.add("pop--active");
    icPopCom.classList.remove("pop--active");
  }
});
