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

$('.offers__sliderimg').slick({
  autoplay: true,
  arrows: false,
  autoplaySpeed: 5000,
  fade: true,
  dots: true,
  zindex: 100
});

$('.feedback__slider').slick({
  infinite: false,
  zindex: 100
});

$('.gallery__slider').slick({
  asNavFor: '.gallery__preview',
  ccsEase: 'ease-in',
  responsive: [{
      breakpoint: 1170,
      settings: {
        arrows: false
      }
    }]
});

$('.gallery__preview').slick({
  asNavFor: '.gallery__slider',
  slidesToShow: 11,
  focusOnSelect: true,
  arrows: false,
  responsive: [{
      breakpoint: 1170,
      settings: {
        slidesToShow: 7
      }
    },
    {
        breakpoint: 750,
        settings: {
          slidesToShow: 3
        }
      }]
});


//Галерея

var btnGallery = document.querySelector(".offers__button-gallery");

var overlayMod = document.querySelector('.overlay-modal');

var btnGalleryClose = document.querySelector(".gallery__button--close");
var modGallery = document.querySelector('.gallery');

btnGallery.addEventListener("click", function (event) {
  event.preventDefault();

  modGallery.classList.add("gallery--active");
  overlayMod.classList.add("overlay--active");

  overlayMod.addEventListener("click", function(event) {
    event.preventDefault();
    modGallery.classList.remove("gallery--active");
    overlayMod.classList.remove("overlay--active");
  });

    window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (modGallery.classList.contains("gallery--active")) {
        modGallery.classList.remove("gallery--active");
        overlayMod.classList.remove("overlay--active");
      }
    }
  });
});

btnGalleryClose.addEventListener("click", function (event) {
  event.preventDefault();

  modGallery.classList.remove("gallery--active");
  overlayMod.classList.remove("overlay--active");
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

//Обработка закрытия модального окна "ПРиглашение к коллективному заказу"
var btnInvite = document.querySelector(".offers__invite-btn");
var btnInviteClose = document.querySelector(".modal-invite__button--cancel");
var modInvite = document.querySelector('.modal__invite');


btnInvite.addEventListener("click", function (event) {
  event.preventDefault();

  modInvite.classList.add("modal--active");
  overlayMod.classList.add("overlay--active");

  overlayMod.addEventListener("click", function(event) {
    event.preventDefault();
    modInvite.classList.remove("modal--active");
    overlayMod.classList.remove("overlay--active");
  });

    window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (modInvite.classList.contains("modal--active")) {
        modInvite.classList.remove("modal--active");
        overlayMod.classList.remove("overlay--active");
      }
    }
  });
});

btnInviteClose.addEventListener("click", function (event) {
  event.preventDefault();

  modInvite.classList.remove("modal--active");
  overlayMod.classList.remove("overlay--active");
});



// Обработка клика на "В корзину"
var btnToCard = document.querySelector(".offers__cart-btn");
var modToCard = document.querySelector(".modal__addtocart");
var btnToCardClose = document.querySelector(".modal__addtocart-btn--close");

btnToCard.addEventListener("click", function (event) {
  event.preventDefault();
  modToCard.classList.add("modal--active");
});

btnToCardClose.addEventListener("click", function (event) {
  event.preventDefault();
  modToCard.classList.remove("modal--active");
});


// Обработка события клика на иконку Сравнения в шапке
// Обработка события клика на иконку Корзины в шапке

var overlay = document.querySelector(".overlay");

var icCom = document.querySelector(".header__usbtn--compare");
var icPopCom = document.querySelector(".pop-compare");

var icCart = document.querySelector(".header__usbtn--cart");
var icPopCart = document.querySelector(".pop--basket");
var icTeam = document.querySelector(".pop-basket--team");
var icPopCreate = document.querySelector(".pop-create");
var icPopCreateCancel = document.querySelector(".pop-create--cancel");
var icNewName = document.querySelector(".pop-create--newname");
var icCreateList = document.querySelector(".pop-create__list");
var icCreateItem = document.querySelector(".pop-create__item");

icNewName.addEventListener("click", function (event) {
  var cloneLi = icCreateItem.cloneNode(true);
  icCreateList.appendChild(cloneLi);
});

icPopCreateCancel.addEventListener("click", function (event) {
  event.preventDefault();
  icPopCreate.classList.remove("pop--active");
  icPopCart.classList.add("pop--active");

  overlay.addEventListener("click", function(event) {
    event.preventDefault();
    icPopCreate.classList.remove("pop--active");
    overlay.classList.remove("overlay--active");
  });

    window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (icPopCreate.classList.contains("pop--active")) {
        icPopCreate.classList.remove("pop--active");
        overlay.classList.remove("overlay--active");
      }
    }
  });
});

icTeam.addEventListener("click", function (event) {
  event.preventDefault();

  if (icPopCreate.classList.contains("pop--active")) {
    icPopCreate.classList.remove("pop--active");
    if (overlay.classList.contains("overlay--active")) {
      overlay.classList.remove("overlay--active");
    }
  } else {
    icPopCreate.classList.add("pop--active");
    overlay.classList.add("overlay--active");
    icPopCart.classList.remove("pop--active");
  }

  overlay.addEventListener("click", function(event) {
    event.preventDefault();
    icPopCreate.classList.remove("pop--active");
    overlay.classList.remove("overlay--active");
  });

    window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (icPopCreate.classList.contains("pop--active")) {
        icPopCreate.classList.remove("pop--active");
        overlay.classList.remove("overlay--active");
      }
    }
  });

});



icCom.addEventListener("click", function (event) {
  event.preventDefault();
  if (icPopCom.classList.contains("pop--active")) {
    icPopCom.classList.remove("pop--active");
    icCom.classList.remove("header__usbtn-active");
    icCom.classList.remove("header__usbtn-active--compare");
    if (overlay.classList.contains("overlay--active")) {
      overlay.classList.remove("overlay--active");
    }
  } else {
    icPopCom.classList.add("pop--active");
    icCom.classList.add("header__usbtn-active");
    icCom.classList.add("header__usbtn-active--compare");
    overlay.classList.add("overlay--active");
    icPopCart.classList.remove("pop--active");
  }

  overlay.addEventListener("click", function(event) {
    event.preventDefault();
    icPopCom.classList.remove("pop--active");
    icCom.classList.remove("header__usbtn-active");
    icCom.classList.remove("header__usbtn-active--compare");
    overlay.classList.remove("overlay--active");
  });

    window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (icPopCom.classList.contains("pop--active")) {
        icPopCom.classList.remove("pop--active");
        icCom.classList.remove("header__usbtn-active");
        icCom.classList.remove("header__usbtn-active--compare");
        overlay.classList.remove("overlay--active");
      }
    }
  });
});

icCart.addEventListener("click", function (event) {
  event.preventDefault();
  if (icPopCart.classList.contains("pop--active")) {
    icPopCart.classList.remove("pop--active");
    icCart.classList.remove("header__usbtn-active");
    icCart.classList.remove("header__usbtn-active--cart");
    if (overlay.classList.contains("overlay--active")) {
      overlay.classList.remove("overlay--active");
    }
  } else {
    icPopCart.classList.add("pop--active");
    icCart.classList.add("header__usbtn-active");
    icCart.classList.add("header__usbtn-active--cart");
    overlay.classList.add("overlay--active");
    icPopCom.classList.remove("pop--active");
  }

  overlay.addEventListener("click", function(event) {
    event.preventDefault();
    icPopCart.classList.remove("pop--active");
    icCart.classList.remove("header__usbtn-active");
    icCart.classList.remove("header__usbtn-active--cart");
    overlay.classList.remove("overlay--active");
  });

    window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (icPopCart.classList.contains("pop--active")) {
        icPopCart.classList.remove("pop--active");
        icCart.classList.remove("header__usbtn-active");
        icCart.classList.remove("header__usbtn-active--cart");
        overlay.classList.remove("overlay--active");
      }
    }
  });
});
