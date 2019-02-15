
$('.param__list').slick({
  mobileFirst: true,
  // autoplay: true,
  // autoplaySpeed: 3000,
  // arrows: false,
  slidesToShow: 3,
  infinite: false,
  // adaptiveHeight: false,
  // adaptiveHeight: true,
  responsive: [{
    breakpoint: 768,
    settings: {
      slidesToShow: 7
    }
  }]
});

function scoring(btn) {
  var form = btn.form;
  var field = btn.parentElement;
  var btns = field.querySelectorAll(".points__button");
  var btnTens = form.querySelectorAll(".points__item--tens .points__button");
  var btnOnes = form.querySelectorAll(".points__item--ones .points__button");
  var btnTenths = form.querySelectorAll(".points__item--tenths .points__button");
  var inputName = form.querySelector(".param__item--active .param__input");


  // Добавляем класс active нажатой кнопке
  if (btn.classList.contains("points__button--active")) {
    btn.classList.remove("points__button--active");
  } else {
    // Удаляем класс active со всех кнопок в текущем fieldset
    for (var i = 0; i < btns.length; i++) {
      if (btns[i].classList.contains("points__button--active")) {
        btns[i].classList.remove("points__button--active");
      }
    }
    btn.classList.add("points__button--active");
  }

  inputName.value = "";

  for (var i = 0; i < btnTens.length; i++) {
    if (btnTens[i].classList.contains("points__button--active")) {
      inputName.value = String(Number(inputName.value) + Number(btnTens[i].value));
    }
  }

  for (var i = 0; i < btnOnes.length; i++) {
    if (btnOnes[i].classList.contains("points__button--active")) {
      inputName.value = String(Number(inputName.value) + Number(btnOnes[i].value));
    }
  }

  for (var i = 0; i < btnTenths.length; i++) {
    if (btnTenths[i].classList.contains("points__button--active")) {
      inputName.value = String(Number(inputName.value) + Number(btnTenths[i].value));
    }
  }

  if (inputName.value == "") {
    inputName.value = "0";
  }
}


function inputActive(item) {
  var form = document.querySelector(".form__add");
  var items = form.querySelectorAll(".param__item");
  var formPoints = form.querySelector(".form__points");
  var btns = form.querySelectorAll(".points__button");

    if (item.classList.contains("param__item--active")) {
      // item.classList.remove("param__item--active");
      // formPoints.classList.remove("form__points--active");
    } else {
      for (var i = 0; i < items.length; i++) {
        if (items[i].classList.contains("param__item--active")) {
          items[i].classList.remove("param__item--active");
        }
      }
      for (var i = 0; i < btns.length; i++) {
        if (btns[i].classList.contains("points__button--active")) {
          btns[i].classList.remove("points__button--active");
        }
      }
      item.classList.add("param__item--active");
      formPoints.classList.add("form__points--active");
    }
}

// Счетчик количества input number в форме
// function sumAmount(act) {
//   var form = act.form;
//   var inputAmount = form.querySelector(".param__input");
//
//   if (act.classList.contains("param__number--plus")) {
//     inputAmount.value = String(Number(inputAmount.value) + 1);
//   }
//
//   if (act.classList.contains("param__number--minus")) {
//     inputAmount.value = String(Number(inputAmount.value) - 1);
//     if (Number(inputAmount.value) <= 0) {
//       inputAmount.value = String(1);
//     }
//   }
//
//   if (act.classList.contains("form__input")) {
//     if (Number(inputAmount.value) <= 0) {
//       inputAmount.value = String(1);
//     }
//   }
// }
