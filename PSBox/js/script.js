// стилизация выпадающего списка

// $(document).ready(function() {
//     $('.js-example-basic-single').select2();
//     // minimumResultsForSearch: -1;
// });


// маска для ввода телефона

$(function(){
  $("#phone").mask("+7 (999) 999-9999");
});

// Валидация формы

function showError(container, errorMessage) {
      container.className = 'error';
      var msgElem = document.createElement('span');
      msgElem.className = "error-message";
      msgElem.innerHTML = errorMessage;
      container.appendChild(msgElem);
    }

    function resetError(container) {
      container.className = '';
      if (container.lastChild.className == "error-message") {
        container.removeChild(container.lastChild);
      }
    }

    function validate(form) {
      var elems = form.elements;

      resetError(elems.from.parentNode);
      if (!elems.from.value) {
        showError(elems.from.parentNode, ' Укажите от кого.');
      }

      resetError(elems.password.parentNode);
      if (!elems.password.value) {
        showError(elems.password.parentNode, ' Укажите пароль.');
      } else if (elems.password.value != elems.password2.value) {
        showError(elems.password.parentNode, ' Пароли не совпадают.');
      }

      resetError(elems.to.parentNode);
      if (!elems.to.value) {
        showError(elems.to.parentNode, ' Укажите, куда.');
      }

      resetError(elems.message.parentNode);
      if (!elems.message.value) {
        showError(elems.message.parentNode, ' Отсутствует текст.');
      }

    }


// Ползунки в диапазоне на форме

// if ("#slider-range") {
//
//
//
//
// $( function() {
//   $( "#slider-range" ).slider({
//     // step: 1,
//     range: true,
//     min: 0,
//     max: 10000,
//     values: [ 200, 3000 ],
//     slide: function( event, ui ) {
//       $( "#range-min" ).val( ui.values[ 0 ]  );
//       $( "#range-max" ).val( ui.values[ 1 ]  );
//     }
//   });
//   $( "#range-min" ).val(  $( "#slider-range" ).slider( "values", 0 ) );
//     $( "#range-max" ).val(  $( "#slider-range" ).slider( "values", 1 ) );

  // $("input#range-min").change(function() {
  //   var value1=$("input#range-min").val();
  //   var value2=$("input#range-max").val();
  //     if(parseInt(value1) > parseInt(value2)) {
  //       value1 = value2;
  //       $("input#range-min").val(value1);
  //     }
  //     $("#slider-range").slider("values", 0, value1);
  // });
  //
  // $("input#range-max").change(function() {
  //   var value1=$("input#range-min").val();
  //   var value2=$("input#range-max").val();
  //
  //     if(parseInt(value1) > parseInt(value2)) {
  //       value2 = value1;
  //       $("input#range-max").val(value2);
  //     }
  //     $("#slider-range").slider("values", 1, value2);
  // });

// } );
//
//
// $(function() {
//
//   (function quantityProducts() {
//     var $quantityArrowMinus = $(".range-from--minus");
//     var $quantityArrowPlus = $(".range-from--plus");
//     var $quantityNum = $(".range-from");
//     var step = 1;
//
//     $quantityArrowMinus.click(quantityMinus);
//     $quantityArrowPlus.click(quantityPlus);
//
//     function quantityMinus() {
//       if ($quantityNum.val() > 1) {
//         $quantityNum.val(+$quantityNum.val() - step);
//       }
//     }
//
//     function quantityPlus() {
//       $quantityNum.val(+$quantityNum.val() + step);
//     }
//   })();
// });
//
// $(function() {
//
//   (function quantityProducts() {
//     var $quantityArrowMinus = $(".range-to--minus");
//     var $quantityArrowPlus = $(".range-to--plus");
//     var $quantityNum = $(".range-to");
//
//     var step = 1;
//
//     $quantityArrowMinus.click(quantityMinus);
//     $quantityArrowPlus.click(quantityPlus);
//
//     function quantityMinus() {
//       if ($quantityNum.val() > 1) {
//         $quantityNum.val(+$quantityNum.val() - step);
//       }
//     }
//
//     function quantityPlus() {
//       $quantityNum.val(+$quantityNum.val() + step);
//     }
//   })();
// });

// Счетчик количества input number в форме

// var inputAmount = document.querySelector(".amount");

$(function() {

  (function quantityProducts() {
    var $quantityArrowMinus = $(".amount--minus");
    var $quantityArrowPlus = $(".amount--plus");
    var $quantityNum = $(".amount");

    $quantityArrowMinus.click(quantityMinus);
    $quantityArrowPlus.click(quantityPlus);

    function quantityMinus() {
      if ($quantityNum.val() > 1) {
        $quantityNum.val(+$quantityNum.val() - 1);
      }
    }

    function quantityPlus() {
      $quantityNum.val(+$quantityNum.val() + 1);
    }
  })();
});




// Поле загрузки файлов drag and drop

var dropZone = $('#upload');
if (dropZone) {
  $('#file-input').focus(function() {
    $('label').addClass('focus');
  })
  .focusout(function() {
    $('label').removeClass('focus');
  });

  dropZone.on('drag dragstart dragend dragover dragenter dragleave drop', function(){
    return false;
  });

  dropZone.on('dragover dragenter', function() {
    dropZone.addClass('dragover');
  });

  dropZone.on('dragleave', function(e) {
    dropZone.removeClass('dragover');
  });

  dropZone.on('dragleave', function(e) {
    let dx = e.pageX - dropZone.offset().left;
    let dy = e.pageY - dropZone.offset().top;
    if ((dx < 0) || (dx > dropZone.width()) || (dy < 0) || (dy > dropZone.height())) {
      dropZone.removeClass('dragover');
    };
  });

  dropZone.on('drop', function(e) {
    dropZone.removeClass('dragover');
    let files = e.originalEvent.dataTransfer.files;
    sendFiles(files);
  });

  $('#file-input').change(function() {
    let files = this.files;
    sendFiles(files);
  });

  function sendFiles(files) {
    let maxFileSize = 5242880;
    let Data = new FormData();
    $(files).each(function(index, file) {
      if ((file.size <= maxFileSize) && ((file.type == 'image/png') || (file.type == 'image/jpeg'))) {
        Data.append('images[]', file);
      }
    });
  };
}


// Слайдеры

$('.about__review-slider').slick({
  mobileFirst: true,
  // autoplay: true,
  // autoplaySpeed: 3000,
  // arrows: false,
  slidesToShow: 1,
  infinite: false,
  adaptiveHeight: false,
  adaptiveHeight: true,
  responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      }]
  });

$('.example__slider').slick({
  mobileFirst: true,
  asNavFor: '.example__preview',
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  responsive: [{
      breakpoint: 1000,
      settings: {
        arrows: true
      }
    }]
});

$('.example__preview').slick({
  mobileFirst: true,
  asNavFor: '.example__slider',
  slidesToShow: 5,
  focusOnSelect: true,
  arrows: false,
  responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 7
        }
      }]
});

$('.pleasure__slider').slick({
  mobileFirst: true,
  asNavFor: '.pleasure__preview',
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  responsive: [{
      breakpoint: 1000,
      settings: {
        arrows: true
      }
    }]
});

$('.pleasure__preview').slick({
  mobileFirst: true,
  asNavFor: '.pleasure__slider',
  slidesToShow: 5,
  focusOnSelect: true,
  arrows: false,
  responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 7
        }
      }]
});

$('.gift__slider').slick({
  autoplay: true,
  autoplaySpeed: 3000,
  dots: true,
  pauseOnDotsHover: true,
  zindex: 100,
  responsive: [{
      breakpoint: 1048,
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
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      }]
});

$('.variant__slider--one').slick({
  mobileFirst: true,
  asNavFor: '.variant__preview--one',
  ccsEase: 'ease-in',
  arrows: false,
  responsive: [{
      breakpoint: 1200,
      settings: {
        arrows: true
      }
    }]
});

$('.variant__preview--one').slick({
  asNavFor: '.variant__slider--one',
  slidesToShow: 6,
  // centerMode: true,
  // centerPadding: '10px',
  focusOnSelect: true,
  arrows: false
  // responsive: [{
  //     breakpoint: 1170,
  //     settings: {
  //       slidesToShow: 7
  //     }
  //   },
  //   {
  //       breakpoint: 750,
  //       settings: {
  //         slidesToShow: 6
  //       }
  //     }]
});

$('.variant__slider--two').slick({
  mobileFirst: true,
  asNavFor: '.variant__preview--two',
  ccsEase: 'ease-in',
  arrows: false,
  responsive: [{
      breakpoint: 1200,
      settings: {
        arrows: true
      }
    }]
  });

$('.variant__preview--two').slick({
  asNavFor: '.variant__slider--two',
  slidesToShow: 6,
  // centerMode: true,
  // centerPadding: '10px',
  focusOnSelect: true,
  arrows: false
  // responsive: [{
  //     breakpoint: 1170,
  //     settings: {
  //       slidesToShow: 7
  //     }
  //   },
  //   {
  //       breakpoint: 750,
  //       settings: {
  //         slidesToShow: 6
  //       }
  //     }]
});

// Наши работы




//Галерея

var btnGallery = document.querySelector(".offers__button-gallery");
var overlayMod = document.querySelector('.overlay-modal');

if (btnGallery) {
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

}


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

//Копирование ссылки в буфер обмена

var btnCopy = document.querySelector('.pop-create__icon--copy');

if (btnCopy) {
  btnCopy.addEventListener('click', function () {

    var linkCopy = document.querySelector('.pop-create__link');

    var range = document.createRange();
    range.selectNode(linkCopy);
    window.getSelection().addRange(range);

    try {
      document.execCommand('copy');
    } catch(err) {
      console.log('Can`t copy, boss');
    }

    window.getSelection().removeAllRanges();
  });
}


//Обработка события клика на "бургер" навигации. При клике разворачивается меню

var nav = document.querySelector(".nav");
var navBtn = document.querySelector(".nav__button");
var overlay = document.querySelector(".overlay");

nav.classList.remove("nav--nojs");

navBtn.addEventListener("click", function (event) {
  event.preventDefault();

  if (nav.classList.contains("nav--closed")) {
    nav.classList.remove("nav--closed");
    nav.classList.add("nav--opened");
    overlay.classList.add("overlay--active");
  } else {
    nav.classList.remove("nav--opened");
    overlay.classList.remove("overlay--active");
    nav.classList.add("nav--closed");
  }
  overlay.addEventListener("click", function(event) {
    event.preventDefault();
    nav.classList.remove("nav--opened");
    overlay.classList.remove("overlay--active");
    nav.classList.add("nav--closed");
  });

    window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (nav.classList.contains("nav--opened")) {
        nav.classList.remove("nav--opened");
        overlay.classList.remove("overlay--active");
        nav.classList.add("nav--closed");
      }
    }
  });


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

//Обработка закрытия модального окна "Приглашение к коллективному заказу"
var btnInvite = document.querySelector(".offers__invite-btn");

if (btnInvite) {
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

}


// модальное окно "Оставить отзыв"
var btnReview = document.querySelector(".review__button");

if (btnReview) {
  var modReview = document.querySelector('.modal-review');
  var modReviewAdd = document.querySelector('.modal-reviewadd');
  var btnReviewSend = document.querySelector(".modal-review__button--send");

  var btnReviewClose = document.querySelector(".modal-review__button--close");
  var btnReviewAddClose = document.querySelector(".modal-reviewadd__button--close");


  modReview.classList.add("modal--active");

  modReview.classList.remove("modal--active");

  btnReview.addEventListener("click", function (event) {
    event.preventDefault();

    modReview.classList.add("modal--active");
    overlayMod.classList.add("overlay--active");

    overlayMod.addEventListener("click", function(event) {
      event.preventDefault();
      modReview.classList.remove("modal--active");
      overlayMod.classList.remove("overlay--active");
    });

    window.addEventListener("keydown", function(event) {
      if (event.keyCode === 27) {
        if (modReview.classList.contains("modal--active")) {
          modReview.classList.remove("modal--active");
          overlayMod.classList.remove("overlay--active");
        }
      }
    });
  });

  btnReviewClose.addEventListener("click", function (event) {
    event.preventDefault();

    modReview.classList.remove("modal--active");
    overlayMod.classList.remove("overlay--active");
  });

  btnReviewSend.addEventListener("click", function () {
    event.preventDefault();

    modReview.classList.remove("modal--active");
    modReviewAdd.classList.add("modal--active");


    btnReviewAddClose.addEventListener("click", function (event) {
      event.preventDefault();

      modReviewAdd.classList.remove("modal--active");
      overlayMod.classList.remove("overlay--active");
    });

    overlayMod.addEventListener("click", function(event) {
      event.preventDefault();
      modReviewAdd.classList.remove("modal--active");
      overlayMod.classList.remove("overlay--active");
    });

    window.addEventListener("keydown", function(event) {
      if (event.keyCode === 27) {
        if (modReviewAdd.classList.contains("modal--active")) {
          modReviewAdd.classList.remove("modal--active");
          overlayMod.classList.remove("overlay--active");
        }
      }
    });
  });

}




// Обработка клика на "В корзину"
var btnToCard = document.querySelector(".offers__cart-btn");

if (btnToCard) {
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

}



// Обработка события клика на иконку Сравнения в шапке
// Обработка события клика на иконку Корзины в шапке



var icCom = document.querySelector(".header__usbtn--compare");
var icPopCom = document.querySelector(".pop-compare");

var icCart = document.querySelector(".header__usbtn--cart");
var icPopCart = document.querySelector(".pop--basket");
var icTeam = document.querySelector(".pop-basket--team");
var icPopCreate = document.querySelector(".pop-create");
var icPopCreateCancel = document.querySelector(".pop-create--cancel");
// var icNewName = document.querySelector(".pop-create--newname");
var icCreateList = document.querySelector(".pop-create__list");
var icCreateItem = document.querySelector(".pop-create__item");
//
// icNewName.addEventListener("click", function (event) {
//   var cloneLi = icCreateItem.cloneNode(true);
//   icCreateList.appendChild(cloneLi);
// });

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
