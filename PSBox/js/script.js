// Помощь в выборе


function validateHelp(fieldForm) {
  var radioForm = fieldForm.querySelectorAll(".help__radio");
  var flagValidCheck = false;
  var btnForm = fieldForm.querySelector(".help__button");

  for (var i = 0; i < radioForm.length; i++) {
    if (radioForm[i].checked) {
      flagValidCheck = true;
    }
  }

  if (flagValidCheck) {
    if (btnForm.classList.contains("help__button--disabled")) {
      btnForm.classList.remove("help__button--disabled");
    }
    if (btnForm.disabled) {
      btnForm.disabled = false;
    }
  }
}

function helpBtn(btnForm) {
  var form = btnForm.form;
  var helpStep1 = form.querySelector(".help__field--step1");
  var helpStep2 = form.querySelector(".help__field--step2");

  if (!btnForm.classList.contains("help__button--disabled")) {
    helpStep1.classList.remove("help__field--opened");
    helpStep1.classList.add("help__field--closed");
    helpStep2.classList.remove("help__field--closed");
    helpStep2.classList.add("help__field--opened");

  }
}

function resetHelp(linkForm) {
  var form = linkForm.form;
  var helpStep = linkForm.offsetParent;
  var helpStep1 = form.querySelector(".help__field--step1");
  var helpStep2 = form.querySelector(".help__field--step2");
  var radioForm1 = helpStep1.querySelectorAll(".help__radio");
  var radioForm2 = helpStep2.querySelectorAll(".help__radio");
  var btnForm1 = helpStep1.querySelector(".help__button");
  var btnForm2 = helpStep2.querySelector(".help__button");

  for (var i = 0; i < radioForm1.length; i++) {
    if (radioForm1[i].checked) {
      radioForm1[i].checked = false;
    }
  }

  for (var i = 0; i < radioForm2.length; i++) {
    if (radioForm2[i].checked) {
      radioForm2[i].checked = false;
    }
  }

  if (!btnForm1.classList.contains("help__button--disabled")) {
    btnForm1.classList.add("help__button--disabled");
  }

  if (btnForm1.disabled) {
    btnForm1.disabled = false;
  }

  if (!btnForm2.classList.contains("help__button--disabled")) {
    btnForm2.classList.add("help__button--disabled");
  }

  if (btnForm2.disabled) {
    btnForm2.disabled = false;
  }

  if (helpStep.classList.contains("help__field--step2")) {
    helpStep1.classList.remove("help__field--closed");
    helpStep1.classList.add("help__field--opened");
    helpStep2.classList.remove("help__field--opened");
    helpStep2.classList.add("help__field--closed");

  }
}


// Валидация формы

// Навешивание соответвующих классов
function validate(condition, input) {
  if (condition) {
    if (input.classList.contains("form__input--invalid")) {
      input.classList.remove("form__input--invalid");
    }
    input.classList.add("form__input--valid");
  } else {
    if (input.classList.contains("form__input--valid")) {
      input.classList.remove("form__input--valid");
    }
    input.classList.add("form__input--invalid");
  }
}

// Проверка всей формы при потере к-л обязательного поля фокуса
function btnValid(form) {
  var elementForm = form.querySelectorAll(".form__input");
  var fieldForm = form.querySelector(".form__shell--consist");
  var checkForm = form.querySelectorAll(".form__checkbox");
  var fieldFormDeli = form.querySelector(".form__shell--delivery");
  var radioFormDeli = form.querySelectorAll(".form__shell--delivery .form__radio");

  // var deliPickup = form.querySelector(".form__delivery--pickup");
  var deliAddress = form.querySelector(".form__delivery--address");

  var fieldFormPay = form.querySelector(".form__shell--payment");
  var radioFormPay = form.querySelectorAll(".form__shell--payment .form__radio");
  var btnForm = form.querySelector(".form__button");

  if (elementForm) {
    var flagValid = true;
  }

  if (fieldForm) {
    var flagValidCheck = false;
  } else {
    var flagValidCheck = true;
  }

  if (fieldFormDeli) {
    var flagValidRadioDeli = false;
  } else {
    var flagValidRadioDeli = true;
  }

  if (deliAddress) {
    var flagValidDeli = true;
    if (deliAddress.classList.contains("form__delivery--active")) {
      var elementFormDeli = form.querySelectorAll(".form__input-delivery");
      for (var i = 0; i < elementFormDeli.length; i++) {
        if (elementFormDeli[i].hasAttribute('required')) {
          if (!elementFormDeli[i].validity.valid) {
            var flagValidDeli = false;
          }
        }
      }
    }
  } else {
    var flagValidDeli = true;
  }

  if (fieldFormPay) {
    var flagValidRadioPay = false;
  } else {
    var flagValidRadioPay = true;
  }

  for (var i = 0; i < elementForm.length; i++) {
    if (elementForm[i].hasAttribute('required')) {
      if (!elementForm[i].validity.valid) {
        var flagValid = false;
      }
    }
  }

  for (var i = 0; i < checkForm.length; i++) {
    if (checkForm[i].checked) {
      flagValidCheck = true;
    }
  }

  for (var i = 0; i < radioFormDeli.length; i++) {
    if (radioFormDeli[i].checked) {
      flagValidRadioDeli = true;
    }
  }

  for (var i = 0; i < radioFormPay.length; i++) {
    if (radioFormPay[i].checked) {
      flagValidRadioPay = true;
    }
  }

  if (flagValid && flagValidCheck && flagValidRadioDeli && flagValidRadioPay && flagValidDeli) {
    if (btnForm.classList.contains("form__button--disabled")) {
      btnForm.classList.remove("form__button--disabled");
    }
  } else {
    if (!btnForm.classList.contains("form__button--disabled")) {
      btnForm.classList.add("form__button--disabled");
    }
  }
}

// Проверка поля при потере фокуса
function validateText(input) {
  var form = input.form;

  validate(input.validity.valid && String(Number(input.value)) != 0, input);
  btnValid(form);
}

// ПРоверка списка checkbox
function validateCheck(fieldForm) {
  var form = fieldForm.form;
  var checkForm = form.querySelectorAll(".form__checkbox");
  var flagValidCheck = false;

  for (var i = 0; i < checkForm.length; i++) {
    if (checkForm[i].checked) {
      flagValidCheck = true;
    }
  }

  validate(flagValidCheck, fieldForm);
  btnValid(form);
}


// ПРоверка списка radio
function validateRadio(fieldForm) {
  var form = fieldForm.form;
  var radioForm = form.querySelectorAll(".form__radiolabel");
  var flagValidRadio = false;

  for (var i = 0; i < radioForm.length; i++) {
    if (radioForm[i].checked) {
      flagValidRadio = true;
    }
  }

  validate(!flagValidRadio, fieldForm);
  btnValid(form);
}

// комментарии к доставке в зависимости от вида

function checkDelivery(radioDeli) {
  var form = radioDeli.form;
  var deliPickup = form.querySelector(".form__delivery--pickup");
  var deliAddress = form.querySelector(".form__delivery--address");
  if (radioDeli.id === "delivery-pickup") {
    deliPickup.classList.add("form__delivery--active");
    deliAddress.classList.remove("form__delivery--active");
  } else {
    deliAddress.classList.add("form__delivery--active");
    deliPickup.classList.remove("form__delivery--active");
  }

}


var modReviewAdd = document.querySelector('.modal-reviewadd');


// Проверка всей формы по кнопке Отправить
function btnValidSubmit(btnForm) {
  var form = btnForm.form;
  var elementForm = form.querySelectorAll(".form__input");
  var btnForm = form.querySelector(".form__button");
  var flagValid = true;
  var fieldForm = form.querySelector(".form__shell--consist");
  var checkForm = form.querySelectorAll(".form__checkbox");
  var fieldFormDeli = form.querySelector(".form__shell--delivery");
  var radioFormDeli = form.querySelectorAll(".form__shell--delivery .form__radio");
  var deliAddress = form.querySelector(".form__delivery--address");

  var fieldFormPay = form.querySelector(".form__shell--payment");
  var radioFormPay = form.querySelectorAll(".form__shell--payment .form__radio");

  if (fieldForm) {
    flagValidCheck = false;
  } else {
    flagValidCheck = true;
  }

  if (fieldFormDeli) {
    var flagValidRadioDeli = false;
  } else {
    var flagValidRadioDeli = true;
  }

  if (deliAddress) {
    var flagValidDeli = true;
    if (deliAddress.classList.contains("form__delivery--active")) {
      var elementFormDeli = form.querySelectorAll(".form__input-delivery");
      for (var i = 0; i < elementFormDeli.length; i++) {
        if (elementFormDeli[i].hasAttribute('required')) {
          if (!elementFormDeli[i].validity.valid) {
            var flagValidDeli = false;
          }
        }
      }
    }
  } else {
    var flagValidDeli = true;
  }

  if (fieldFormPay) {
    var flagValidRadioPay = false;
  } else {
    var flagValidRadioPay = true;
  }

  for (var i = 0; i < elementForm.length; i++) {
    if (elementForm[i].hasAttribute('required')) {
      if (!elementForm[i].validity.valid) {
        flagValid = false;
      }
      validate(elementForm[i].validity.valid, elementForm[i]);
    }
  }

  for (var i = 0; i < checkForm.length; i++) {
    if (checkForm[i].checked) {
      flagValidCheck = true;
    }
  }

  if (fieldForm) {
    validate(flagValidCheck, fieldForm);
  }

  for (var i = 0; i < radioFormDeli.length; i++) {
    if (radioFormDeli[i].checked) {
      flagValidRadioDeli = true;
    }
  }

  if (fieldFormDeli) {
    validate(flagValidRadioDeli, fieldFormDeli);
  }

  for (var i = 0; i < radioFormPay.length; i++) {
    if (radioFormPay[i].checked) {
      flagValidRadioPay = true;
    }
  }

  if (fieldFormPay) {
    validate(flagValidRadioPay, fieldFormPay);
  }


  if (flagValid && flagValidCheck && flagValidRadioDeli && flagValidRadioPay && flagValidDeli) {
    if (btnForm.classList.contains("form__button--disabled")) {
      btnForm.classList.remove("form__button--disabled");
    }
  } else {
    if (!btnForm.classList.contains("form__button--disabled")) {
      btnForm.classList.add("form__button--disabled");
    }
  }
}
//

// Счетчик количества input number в форме
function sumAmount(act) {
  var form = act.form;
  var inputAmount = form.querySelector(".form__input--amount");

  if (act.classList.contains("form__inputamount--plus")) {
    inputAmount.value = String(Number(inputAmount.value) + 1);
  }

  if (act.classList.contains("form__inputamount--minus")) {
    inputAmount.value = String(Number(inputAmount.value) - 1);
    if (Number(inputAmount.value) <= 0) {
      inputAmount.value = String(1);
    }
  }

  if (act.classList.contains("form__input--amount")) {
    if (Number(inputAmount.value) <= 0) {
      inputAmount.value = String(1);
    }
  }
}


// маска для ввода телефона
$(function() {
  $("#phone").mask("+7 (999) 999-9999");
});


// Ползунки в диапазоне на форме
if ("#slider-range") {

  $(function() {
    $("#slider-range").slider({
      range: true,
      min: 0,
      max: 50000,
      values: [0, 50000],
      slide: function(event, ui) {
        $("#range-from").val(ui.values[0]);
        $("#range-to").val(ui.values[1]);
      }
    });
    $("#range-from").val($("#slider-range").slider("values", 0));
    $("#range-to").val($("#slider-range").slider("values", 1));


    var $rangeFromMinus = $("#range-from--minus");
    var $rangeFromPlus = $("#range-from--plus");
    var $rangeFrom = $("#range-from");
    var $rangeToMinus = $("#range-to--minus");
    var $rangeToPlus = $("#range-to--plus");
    var $rangeTo = $("#range-to");
    var step = 100;
    var $selectCost = $('input[name=cost]:radio');

    $selectCost.change(function() {
      var $optionCost = $('input[name=cost]:checked').val();

      if ($optionCost == "any") {
        var value1 = 0;
        var value2 = 50000;
        $("#slider-range").slider("values", 0, value1);
        $("#slider-range").slider("values", 1, value2);
        $rangeFrom.val(value1);
        $rangeTo.val(value2);
      }

      if ($optionCost == "low") {
        var value1 = 0;
        var value2 = 1500;
        $("#slider-range").slider("values", 0, value1);
        $("#slider-range").slider("values", 1, value2);
        $rangeFrom.val(value1);
        $rangeTo.val(value2);
      }

      if ($optionCost == "middle") {
        var value1 = 1500;
        var value2 = 5000;
        $("#slider-range").slider("values", 0, value1);
        $("#slider-range").slider("values", 1, value2);
        $rangeFrom.val(value1);
        $rangeTo.val(value2);
      }

      if ($optionCost == "high") {
        var value1 = 5000;
        var value2 = 50000;
        $("#slider-range").slider("values", 0, value1);
        $("#slider-range").slider("values", 1, value2);
        $rangeFrom.val(value1);
        $rangeTo.val(value2);
      }
    });

    $rangeFrom.change(function() {
      var value1 = $rangeFrom.val();
      var value2 = $rangeTo.val();
      if (parseInt(value1) < 0) {
        value1 = 0;
        $rangeFrom.val(value1);
      }
      if (parseInt(value1) > parseInt(value2)) {
        value1 = value2;
        $rangeFrom.val(value1);
      }
      $("#slider-range").slider("values", 0, value1);
    });


    $rangeFromMinus.click(function() {
      if ($rangeFrom.val() > 1) {
        $rangeFrom.val(+$rangeFrom.val() - step);
      }
      var value1 = $rangeFrom.val();
      var value2 = $rangeTo.val();
      if (parseInt(value1) < 0) {
        value1 = 0;
        $rangeFrom.val(value1);
      }
      if (parseInt(value1) > parseInt(value2)) {
        value1 = value2;
        $rangeFrom.val(value1);
      }
      $("#slider-range").slider("values", 0, value1);
    });

    $rangeFromPlus.click(function() {
      $rangeFrom.val(+$rangeFrom.val() + step);
      var value1 = $rangeFrom.val();
      var value2 = $rangeTo.val();
      if (parseInt(value1) > parseInt(value2)) {
        value1 = value2;
        $rangeFrom.val(value1);
      }
      $("#slider-range").slider("values", 0, value1);
    });

    $rangeTo.change(function() {
      var value1 = $rangeFrom.val();
      var value2 = $rangeTo.val();
      if (parseInt(value1) > parseInt(value2)) {
        value2 = value1;
        $rangeTo.val(value2);
      }
      $("#slider-range").slider("values", 1, value2);
    });

    $rangeToMinus.click(function() {
      if ($rangeTo.val() > 1) {
        $rangeTo.val(+$rangeTo.val() - step);
      }
      var value1 = $rangeFrom.val();
      var value2 = $rangeTo.val();
      if (parseInt(value1) > parseInt(value2)) {
        value2 = value1;
        $rangeTo.val(value2);
      }
      $("#slider-range").slider("values", 1, value2);
    });

    $rangeToPlus.click(function() {
      $rangeTo.val(+$rangeTo.val() + step);
      var value1 = $rangeFrom.val();
      var value2 = $rangeTo.val();
      if (parseInt(value1) > parseInt(value2)) {
        value2 = value1;
        $rangeTo.val(value2);
      }
      $("#slider-range").slider("values", 1, value2);
    });
  });
}

// Поле загрузки файлов drag and drop
var dropZone = $('#upload');
if (dropZone) {
  $('#file-input').focus(function() {
      $('label').addClass('focus');
    })
    .focusout(function() {
      $('label').removeClass('focus');
    });

  dropZone.on('drag dragstart dragend dragover dragenter dragleave drop', function() {
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
$('.oneitem__slider').slick({
  mobileFirst: true,
  asNavFor: '.oneitem__preview',
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  responsive: [{
    breakpoint: 1000,
    settings: {}
  }]
});

$('.oneitem__preview').slick({
  mobileFirst: true,
  asNavFor: '.oneitem__slider',
  slidesToShow: 4,
  focusOnSelect: true,
  arrows: false
});

$('.about__review-slider').slick({
  mobileFirst: true,
  // autoplay: true,
  // autoplaySpeed: 3000,
  // arrows: false,
  slidesToShow: 1,
  infinite: false,
  // adaptiveHeight: false,
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
  adaptiveHeight: true,
  responsive: [{
    breakpoint: 1170,
    settings: {
      arrows: false
    }
  }]
});

$('.gallery__preview').slick({
  asNavFor: '.gallery__slider',
  slidesToShow: 9,
  focusOnSelect: true,
  arrows: false,
  responsive: [{
      breakpoint: 1170,
      settings: {
        slidesToShow: 7
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 6
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 5
      }
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 440,
      settings: {
        slidesToShow: 3
      }
    }
  ]
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
  focusOnSelect: true,
  arrows: false
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
  focusOnSelect: true,
  arrows: false
});


//Галерея

var btnGallery = document.querySelector(".offers__button-gallery");
var overlayMod = document.querySelector('.overlay-modal');

if (btnGallery) {
  var btnGalleryClose = document.querySelector(".gallery__button--close");
  var modGallery = document.querySelector('.gallery');

  btnGallery.addEventListener("click", function(event) {
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

  btnGalleryClose.addEventListener("click", function(event) {
    event.preventDefault();

    modGallery.classList.remove("gallery--active");
    overlayMod.classList.remove("overlay--active");
  });

}


//Прилипание шапки при прокрутке

var HeaderFixed = (function() {

  var docElem = document.documentElement,
    header = document.querySelector(".header"),
    didScroll = false,
    changeHeaderOn = 400;

  function init() {
    window.addEventListener("scroll", function(event) {
      if (!didScroll) {
        didScroll = true;
        setTimeout(scrollPage, 250);
      }
    }, false);
  }

  function scrollPage() {
    var sy = scrollY();
    if (sy >= changeHeaderOn) {
      header.classList.add("header--min");
    } else {
      header.classList.remove("header--min");
    }
    didScroll = false;
  }

  function scrollY() {
    return window.pageYOffset || docElem.scrollTop;
  }

  init();

})();

//Прилипание фильтра при прокрутке

var filter = document.querySelector(".filter");

if (filter) {
  var FilterFixed = (function() {

    var docElem = document.documentElement,
      // filter = document.querySelector(".filter"),
      didScroll = false,
      changeFilterOn = 410;

    function init() {
      window.addEventListener("scroll", function(event) {
        if (!didScroll) {
          didScroll = true;
          setTimeout(scrollPage, 250);
        }
      }, false);
    }

    function scrollPage() {
      var sy = scrollY();
      if (sy >= changeFilterOn) {
        filter.classList.add("filter--fixed");
      } else {
        filter.classList.remove("filter--fixed");
      }
      didScroll = false;
    }

    function scrollY() {
      return window.pageYOffset || docElem.scrollTop;
    }

    init();

  })();

}

//Копирование ссылки в буфер обмена

var btnCopy = document.querySelector('.pop-create__icon--copy');

if (btnCopy) {
  btnCopy.addEventListener('click', function() {

    var linkCopy = document.querySelector('.pop-create__link');

    var range = document.createRange();
    range.selectNode(linkCopy);
    window.getSelection().addRange(range);

    try {
      document.execCommand('copy');
    } catch (err) {
      console.log('Can`t copy, boss');
    }

    window.getSelection().removeAllRanges();
  });
}

// копирование ссылки в Коллективной корзине

var btnCopyCase = document.querySelector('.case__buttoncopy');

if (btnCopyCase) {
  btnCopyCase.addEventListener('click', function() {

    var linkCopy = document.querySelector('.case__link');

    var range = document.createRange();
    range.selectNode(linkCopy);
    window.getSelection().addRange(range);

    try {
      document.execCommand('copy');
    } catch (err) {
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

navBtn.addEventListener("click", function(event) {
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

//Обработка клика для выпадающего фильтра

var listFilterCon = document.querySelector(".filter__fieldset--composition .form__wrap--consist");

if (listFilterCon) {
  var btnFilterCon = document.querySelector(".filter__button--composition");

  btnFilterCon.addEventListener("click", function() {
    if (listFilterCon.classList.contains("filter__wrap--close")) {
      listFilterCon.classList.remove("filter__wrap--close");
    } else {
      listFilterCon.classList.add("filter__wrap--close");
    }
  });
}

var listFilterFil = document.querySelector(".filter__fieldset--filter .form__wrap--filter");


if (listFilterFil) {
  var btnFilterFil = document.querySelector(".filter__button--filter");

  btnFilterFil.addEventListener("click", function() {
    if (listFilterFil.classList.contains("filter__wrap--close")) {
      listFilterFil.classList.remove("filter__wrap--close");
    } else {
      listFilterFil.classList.add("filter__wrap--close");
    }
  });

}

//Обработка клика для выпадающего подменю
var navSub = document.querySelector(".nav__item--sub");
var navSubList = document.querySelector(".nav__sublist");

navSub.addEventListener("click", function() {
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


  btnInvite.addEventListener("click", function(event) {
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

  btnInviteClose.addEventListener("click", function(event) {
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

  btnReview.addEventListener("click", function(event) {
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

  btnReviewClose.addEventListener("click", function(event) {
    event.preventDefault();

    modReview.classList.remove("modal--active");
    overlayMod.classList.remove("overlay--active");
  });

  btnReviewSend.addEventListener("click", function() {
    event.preventDefault();

    modReview.classList.remove("modal--active");
    modReviewAdd.classList.add("modal--active");


    btnReviewAddClose.addEventListener("click", function(event) {
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

  btnToCard.addEventListener("click", function(event) {
    event.preventDefault();
    modToCard.classList.add("modal--active");
  });

  btnToCardClose.addEventListener("click", function(event) {
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

icPopCreateCancel.addEventListener("click", function(event) {
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

icTeam.addEventListener("click", function(event) {
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



icCom.addEventListener("click", function(event) {
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

icCart.addEventListener("click", function(event) {
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

// кнопка Сортировки

var filterSort = document.querySelector(".filter__sortbtn");

if (filterSort) {
  filterSort.addEventListener("click", function(event) {
      event.preventDefault();

      if (filterSort.classList.contains("filter__sortbtn--up")) {
        filterSort.classList.remove("filter__sortbtn--up");
        filterSort.classList.add("filter__sortbtn--down");
      } else {
        filterSort.classList.remove("filter__sortbtn--down");

        filterSort.classList.add("filter__sortbtn--up");
      }

  });
}
