var arrChoice = [];

document.addEventListener("click", function(event) {
  var target = event.target;


  //открытие/закрытие фильтра
  if (target.classList.contains("filter__btnOpen")) {
    if (document.querySelector(".main")) {
      if (document.querySelector(".main").dataset.filter == "open") {
        closeFilter();
      } else {
        closeAction();
        closeNotice();
        openFilter(); 
      }
    }
  }

  //выбор параметров фильтра
  if (target.classList.contains("filter__item")) {
    if (target.dataset.check != "true") {
      target.dataset.check = "true";
      let filter = document.querySelector(".filter");
      if (filter) {
        let filterChoice = filter.querySelector(".filter__filterChoice");
        let filterItemClone = target.cloneNode(true);

        let btn = document.createElement("button"); 
        btn.type = "button";
        btn.classList.add("filter__btnRemove");
        filterItemClone.appendChild(btn);

        filterItemClone.classList.remove("filter__item");
        filterItemClone.classList.add("filter__itemChoice");
        filterChoice.appendChild(filterItemClone);
        filter.querySelector(".filter__btn--reset").disabled = false;
        filter.querySelector(".filter__btn--apply").disabled = false;
      }
    } else {
      target.dataset.check = "false";
      let filter = document.querySelector(".filter");
      if (filter) {
        let filterChoice = filter.querySelector(".filter__filterChoice");
        let filterItemsChoice = filter.querySelectorAll(".filter__itemChoice");
        for (var i = 0; i < filterItemsChoice.length; i++) {
          if (filterItemsChoice[i].dataset.id == target.dataset.id) {
            filterChoice.removeChild(filterItemsChoice[i]);
          }
        }
        if (filterItemsChoice.length == 1) {
          filter.querySelector(".filter__btn--reset").disabled = true;
        }
        filter.querySelector(".filter__btn--apply").disabled = false;
      }
    }
  }

  //удаление выбранных параметров фильтра
  if (target.classList.contains("filter__btnRemove")) {
    let wrap = target.closest(".filter__itemChoice");
    let filter = document.querySelector(".filter");
    if (filter) {
      let filterChoice = filter.querySelector(".filter__filterChoice");
      filterChoice.removeChild(wrap);
      let filterItems = filter.querySelectorAll(".filter__item");
      for (var i = 0; i < filterItems.length; i++) {
        if (filterItems[i].dataset.id == wrap.dataset.id) {
          filterItems[i].dataset.check = "false";
        }
      }
      let filterItemsChoice = filter.querySelectorAll(".filter__itemChoice");
      if (filterItemsChoice.length == 0) {
        filter.querySelector(".filter__btn--reset").disabled = true;
      }
      filter.querySelector(".filter__btn--apply").disabled = false;

    }
  }

  //применить в фильтре
  if (target.classList.contains("filter__btn--apply")) {
    closeFilter();
  }

  //отмена в фильтре => из массива arrChoice
  if (target.classList.contains("filter__btn--cancel")) {
    clearFilter();
    currentFilter();
    closeFilter();
  }


  //сбросить все фильтры
  if (target.classList.contains("filter__btn--reset")) {
    clearFilter();
  }

  //выбор в меню пользователя
  if (target.classList.contains("user__dropDownItem")) {
    closeUser();
  }

  // Открытие/закрытие выпадающего окна "Меню пользователя""
  let userBtn = target.closest(".user__buttonOpen");
  if (userBtn) {
    let wrap = target.closest(".user");
    if (wrap.dataset.list == "show") {
      closeUser();
    } else {
      openUser();
      closeNotice();
    }
    return;
  }

  // Открытие Уведомлений
  if (target.classList.contains("user__dropDownItem--notice")) {
    closeUser();
    closeFilter();
    openNotice();
    setTimeout(offNotice, 2000);
    return;
  }

  // закрытие Уведомлений по overlay
  if (target.classList.contains("notice__overlay")) {
    closeNotice();
  }
  

  // закрытие выпадающего окна "Меню пользователя" по overlay
  if (target.classList.contains("user__overlay")) {
    closeUser();
  }

  // Открытие/закрытие выпадающего окна
  let controlBtn = target.closest(".control__button--dropDown");
  if (controlBtn) {
    let wrap = target.closest(".control__wrap");
    let control = document.querySelector(".control");
    let overlay = control.querySelector(".control__overlay");
    
    if (wrap.dataset.list == "show") {
      wrap.dataset.list = "hide";
      overlay.dataset.status = "hide";
    } else {
      let controlWraps = control.querySelectorAll(".control__wrap");
      for (var i = 0; i < controlWraps.length; i++) {
        controlWraps[i].dataset.list = "hide";
      }
      wrap.dataset.list = "show";
      overlay.dataset.status = "show";
    }
    return;
  }

  // Выбор из выпадающего списка
  if (target.classList.contains("control__dropDownItem")) {
    let wrap = target.closest(".control__wrap");
    let text = target.innerHTML;
    let control = document.querySelector(".control");
    let overlay = control.querySelector(".control__overlay");

    wrap.querySelector(".control__name").innerHTML = text;
    wrap.dataset.list = "hide";
    overlay.dataset.status = "hide";

    if (wrap.classList.contains("control__wrap--layout")) {
      let allFiles = document.querySelector(".file");
      allFiles.dataset.mode = target.dataset.layout;
      wrap.dataset.mode = target.dataset.layout;
    }
  }



  // Открытие/закрытие выпадающего окна
  if (target.classList.contains("dropDown__name")||target.parentNode.classList.contains("dropDown__name")||target.classList.contains("dropDown__button")) {
    let wrap = target.closest(".dropDown");
    wrap.dataset.list = (wrap.dataset.list == "show") ? "hide" : "show";
  }


  //закрытие выпадающего списка по клику на overlay
  if (target.classList.contains("dropDown__overlay")) {
    let wrap = target.closest(".dropDown");
    wrap.dataset.list = "hide";
  }

  // Выбор из выпадающего списка
  if (target.classList.contains("dropDown__item")) {
    let wrap = target.closest(".dropDown");

    wrap.querySelector(".dropDown__name").innerHTML = target.innerHTML;
    wrap.dataset.list = "hide";


    if (wrap.closest(".pop__dropDown--accessShare")) {
      if (target.dataset.access == "period") {
        wrap.closest(".pop--share").dataset.accessPeriod = "show";
      } else {
        wrap.closest(".pop--share").dataset.accessPeriod = "hide";
      }
    }

  }



  // Включение режима действия с файлами
  if (target.classList.contains("control__button--action")) {
    let wrapFiles = document.querySelector(".tile");

    if (wrapFiles.dataset.action == "false") {
      openAction();
    } else {
      closeAction();
    }
  }

  //закрытие выпадающего списка по клику на overlay
  if (target.classList.contains("control__overlay")) {
    let control = document.querySelector(".control");
    let overlay = control.querySelector(".control__overlay");
    let wrap = control.querySelectorAll(".control__wrap");
    for (var i = 0; i < wrap.length; i++) {
      wrap[i].dataset.list = "hide;"
    }
    overlay.dataset.status = "hide";
  }

  //выделение всех файлов по кнопке Выбрать все
  if (target.classList.contains("control__button--selectAll")) {
    // let count = selectAllFiles();
    document.querySelector(".action__selected").innerHTML = selectAllFiles();
    document.querySelector(".action__buttonWrap").dataset.disabled = "false";

  }

  //выбор файла
  if (target.classList.contains("tile__btnCheck")) {
    target.dataset.check = (target.dataset.check == "false") ? "true" : "false";
    let count = countFiles();
    document.querySelector(".action__selected").innerHTML = count;
    let actionBtnWrap = document.querySelector(".action__buttonWrap");
    actionBtnWrap.dataset.disabled = (count == 0) ? "true" : "false"
  }

  //открытие всплывающего окна "Добавить в коллекцию"
  if (target.classList.contains("action__button--inCollection")) {
    popOpen(document.querySelector(".pop--addToCollection"), "action");
  }

  //открытие всплывающего окна "Скачать"
  if (target.classList.contains("action__button--download")) {
    popOpen(document.querySelector(".pop--download"), "action");
  }

  //открытие всплывающего окна "Поделиться"
  if (target.classList.contains("action__button--share")) {
    popOpen(document.querySelector(".pop--share"), "action");
  }

  //открытие Уведомления "Удаление Коллекций
  if (target.classList.contains("action__button--deleteCollection")) {
    notificationOpen(document.querySelector(".notification"));
    // setTimeout(notificationClose, 5000, document.querySelector(".notification--deleteCollection"));
    closeAction();
  }

  //закрытие Уведомлений по overlay
  if (target.classList.contains("notification__overlay")) {
    let wrap = target.closest(".notification");
    notificationClose(wrap);
  }

  //закрытие Уведомлений по кнопке Закрыть
  if (target.classList.contains("notification__button--close")) {
    let wrap = target.closest(".notification");
    notificationClose(wrap);
  }

  //открытие всплывающего окна "Создать коллекцию"
  if (target.classList.contains("collection__btn--newCollection")) {
    popOpen(document.querySelector(".pop--createCollection"), "action");
  }

  //открытие всплывающего окна "Настройки коллекции"
  if (target.classList.contains("collection__btn--setting") || target.classList.contains("collection__btn--shared")) {
    closeAction();
    popOpen(document.querySelector(".pop--settingCollection"), "action");
  }

  

  //закрытие всплывающего окна по Крестику
  if (target.classList.contains("pop__buttonClose")) {
    popClose(target);
  }

  //закрытие всплывающего окна по кнопке Отмена
  if (target.classList.contains("pop__button--cancel")) {
    popClose(target);
  }

  //закрытие всплывающего окна по Overlay
  if (target.classList.contains("pop")) {
    popClose2(target);
  }

  //Добавление/Удаление из коллекций во всплывающем окне
  if (target.classList.contains("pop__btnCollection")) {
    let item = target.closest(".pop__listItem");

    if (item.dataset.mode == "plus" || item.dataset.mode == "minus") {
      item.dataset.mode = "check";
      checkBtnCollection(target, item.dataset.mode);
      return;
    }

    if (item.dataset.mode == "check" ) {
      item.dataset.mode = "minus";
      checkBtnCollection(target, item.dataset.mode);
      return;
    }
  }

  //открытие текстового поля для ввода названия коллекции
  if (target.classList.contains("pop__button--createLink")) {
    let wrap = target.closest(".pop__inputWrap--createCollection");
    if (wrap) wrap.dataset.create = "true";
  }

  //закрытие текстового поля для ввода названия коллекции
  if (target.classList.contains("pop__button--cancelNewCollection")) {
    let wrap = target.closest(".pop__inputWrap--createCollection");
    if (wrap) {
      wrap.dataset.create = "false";
      wrap.querySelector(".pop__input").value = "";
    }
  }

  //показать/скрыть пароль
  if (target.classList.contains("input__btnPassword")) {
    let wrap = target.closest(".input--password");
    if (wrap.dataset.password == "hide") {
      wrap.dataset.password = "show";
      wrap.getElementsByTagName("input")[0].type = "text";
      target.title = "Скрыть пароль";
    } else {
      wrap.dataset.password = "hide";
      wrap.getElementsByTagName("input")[0].type = "password";
      target.title = "Показать пароль";
    }
  }


});

document.addEventListener("input", function(event) {
  var target = event.target;
  let wrap = target.closest(".input");
  if (wrap) {
    if (wrap.classList.contains("login__input")) {
      checkFormLogin(target.form);
    }
  }
});

document.addEventListener("focus", function(event) {
  var target = event.target;
  if (target.classList.contains("search__input")) {
    closeAllTabs();
    document.querySelector(".header__tab--search").dataset.mode = "open";
  }
}, true);

document.addEventListener("blur", function(event) {
  var target = event.target;
  if (target.classList.contains("search__input")) {
    document.querySelector(".header__tab--search").dataset.mode = "close";
  }
  if (document.querySelector(".header") && document.querySelector(".header").dataset.placement == "collection") {
    document.querySelector(".header__tab--collection").dataset.mode = "open";
  }
  // if (document.querySelector(".header") && document.querySelector(".header").dataset.placement == "search") {
  //   document.querySelector(".header__tab--search").dataset.mode = "open";
  // }
}, true);

function closeAllTabs() {
  let header = document.querySelector(".header");
  let tabs = header.querySelectorAll(".header__tab");
  for (var i = 0; i < tabs.length; i++) {
    if (tabs[i].dataset.mode == "open") {
      if (tabs[i].classList.contains("header__tab--filter")) closeFilter();
      if (tabs[i].classList.contains("header__tab--collection")) tabs[i].dataset.mode = "close";;
    }
  }
}

function checkFormLogin(form) {
  let input = form.getElementsByTagName("input");
  let flag = true;
  for (var i = 0; i < input.length; i++) {
    if (input[i].value == "") flag = false;
  }

  form.querySelector(".login__button").disabled = (flag) ? false : true;
}


function notificationOpen(notification) {
  notification.dataset.mode = "open";
  setTimeout(notificationClose, 5000, notification);
}

function notificationClose(notification) {
  notification.dataset.mode = "close";
}

function popOpen(pop, mode) {
  pop.dataset.mode = "open";
  document.body.classList.add("overflowHidden");
}

function popClose(button) {
  let pop = button.closest(".pop");
  pop.dataset.mode = "close";
  document.body.classList.remove("overflowHidden");
}

function popClose2(pop) {
  pop.dataset.mode = "close";
  document.body.classList.remove("overflowHidden");
}
      

function closeFilter() {
  document.querySelector(".main").dataset.filter = "close";
  if (document.querySelector(".header__tab--filter")) document.querySelector(".header__tab--filter").dataset.mode = "close";
  document.body.classList.remove("overflowHidden");
  arrChoice = [];
}

function openFilter() {
  let filter = document.querySelector(".filter");
  document.querySelector(".main").dataset.filter = "open";
  document.querySelector(".header__tab--filter").dataset.mode = "open";
  document.body.classList.add("overflowHidden");
  filter.querySelector(".filter__btn--apply").disabled = true;


  //копирование текущих выбранных фильтров
  let filterChoice = filter.querySelector(".filter__filterChoice");
  let filterItemsChoice = filter.querySelectorAll(".filter__itemChoice");
  if (filterItemsChoice.length > 0) {
    for (var i = 0; i < filterItemsChoice.length; i++) {
      arrChoice.push([filterItemsChoice[i].dataset.id, filterItemsChoice[i].innerHTML]);
    }
  }
}


function currentFilter() {
  let filter = document.querySelector(".filter");
  if (filter) {
    let filterChoice = filter.querySelector(".filter__filterChoice");
    for (var i = 0; i < arrChoice.length; i++) {
      let li = document.createElement("li"); 
      li.className = "filter__itemChoice"; 
      li.setAttribute("data-id", arrChoice[i][0]);
      li.innerHTML = arrChoice[i][1];
      filterChoice.appendChild(li);
    }

    let filterItems = filter.querySelectorAll(".filter__item");
    for (var i = 0; i < filterItems.length; i++) {
      for (var j = 0; j < arrChoice.length; j++) {
        if (filterItems[i].dataset.id == arrChoice[j][0]) {
          filterItems[i].dataset.check = "true";
        }
      }
    }
  }
}
         

function clearFilter() {
  let filter = document.querySelector(".filter");
  if (filter) {
    filter.querySelector(".filter__btn--reset").disabled = true;
    filter.querySelector(".filter__btn--apply").disabled = false;

    let filterChoice = filter.querySelector(".filter__filterChoice");
    let filterItemsChoice = filter.querySelectorAll(".filter__itemChoice");
    for (var i = 0; i < filterItemsChoice.length; i++) {
      filterChoice.removeChild(filterItemsChoice[i]);
    }
    let filterItems = filter.querySelectorAll(".filter__item");
    for (var i = 0; i < filterItems.length; i++) {
      filterItems[i].dataset.check = "false";
    }
  }
}

//подсчет количества выделенных файлов
function countFiles() {
  let wrapFiles = document.querySelector(".tile");
  let filesBtnCheck = wrapFiles.querySelectorAll(".tile__btnCheck");
  let count = 0;
  for (var i = 0; i < filesBtnCheck.length; i++) {
    if (filesBtnCheck[i].dataset.check == "true") {
      count++;
    }
  }
  return count;
}

//выделение и подсчет количества выделенных файлов
function selectAllFiles() {
  let wrapFiles = document.querySelector(".tile");
  let filesBtnCheck = wrapFiles.querySelectorAll(".tile__btnCheck");
  let count = 0;
  for (var i = 0; i < filesBtnCheck.length; i++) {
    if (filesBtnCheck[i].closest(".tile__item").dataset.disabled == "true") continue;
    filesBtnCheck[i].dataset.check = "true";
    count++;
  }
  return count;
}

//открыть Меню пользователя
function openUser() {
  document.querySelector(".user").dataset.list = "show";
  document.querySelector(".header").dataset.user = "open";
}

//закрыть Меню пользователя
function closeUser() {
  document.querySelector(".user").dataset.list = "hide";
  document.querySelector(".header").dataset.user = "close";
}

function offNotice() {
  document.querySelector(".user").dataset.notice = "hide";
  let notice = document.querySelector(".notice");
  let noticeItem = notice.querySelectorAll(".notice__item");
  for (var i = 0; i < noticeItem.length; i++) {
    noticeItem[i].dataset.notice = "old";
  }
}

function onNotice() {
  document.querySelector(".user").dataset.notice = "show";
}



//закрыть Меню пользователя
function openNotice() {
  document.querySelector(".main").dataset.notice = "open";
  document.querySelector(".header__tab--user").dataset.mode = "open";
}

//закрыть Меню пользователя
function closeNotice() {
  document.querySelector(".main").dataset.notice = "close";
  document.querySelector(".header__tab--user").dataset.mode = "close";
}

//включить режим Действия с файлами
function openAction() {
  document.querySelector(".tile").dataset.action = "true";
  document.querySelector(".control").dataset.action = "true";
  document.querySelector(".control__button--action").innerHTML = "Отменить";
  // document.querySelector(".control__wrap--selectAll").dataset.status = "show";
  document.querySelector(".action").dataset.status = "show";
  let control = document.querySelector(".control");
  let overlay = control.querySelector(".control__overlay");
  let wrap = control.querySelectorAll(".control__wrap");
  for (var i = 0; i < wrap.length; i++) {
    wrap[i].dataset.list = "hide;"
  }
  overlay.dataset.status = "hide";

}

//выключить режим Действия с файлами
function closeAction() {
  document.querySelector(".tile").dataset.action = "false";
  document.querySelector(".control").dataset.action = "false";
  document.querySelector(".control__button--action").innerHTML = "Выбрать";
  // document.querySelector(".control__wrap--selectAll").dataset.status = "hide";
  document.querySelector(".action").dataset.status = "hide";
  resetAction();
  document.querySelector(".action__buttonWrap").dataset.disabled = "true";
}

//сбросить кнопки Действия с файлами
function resetAction() {
  let wrapFiles = document.querySelector(".tile");
  let filesBtnCheck = wrapFiles.querySelectorAll(".tile__btnCheck");
  for (var i = 0; i < filesBtnCheck.length; i++) {
    filesBtnCheck[i].dataset.check = "false";
  }
  let selectedFiles = document.querySelector(".action__selected");
  selectedFiles.innerHTML = "0";
}

//перевод числа (больше 100) в "99+"
function checkCollectionCount(number) {
  if (+number > 0) return "99+";
}

function checkBtnCollection(button, mode) {
  if (mode == "check") {
    button.getElementsByTagName("SPAN")[0].innerHTML = "Убрать из коллекции";
    button.title = "Удалить из коллекции";
  }
  if (mode == "plus") {
    button.getElementsByTagName("SPAN")[0].innerHTML = "Добавить в коллекцию";
    button.title = "Добавить в коллекцию";
  }
  if (mode == "minus") {
    button.getElementsByTagName("SPAN")[0].innerHTML = "Добавить все в коллекцию";
    button.title = "Добавить все в коллекцию";
  }
}

var updownBtn = document.querySelector(".updown");

if (updownBtn) {
  let main = document.querySelector(".main");

  main.addEventListener("scroll", trackScroll);
  updownBtn.addEventListener("click", backToTop);

  function trackScroll() {
    let main = document.querySelector(".main");
    let scrolled = main.scrollTop;
    let coords = document.documentElement.clientHeight;

    if (scrolled > coords / 2) updownBtn.dataset.mode = "show";
    if (scrolled < coords / 2) updownBtn.dataset.mode = "hide";
  }

  function backToTop() {
    let main = document.querySelector(".main");

    if (main.scrollTop > 0) {
      main.scrollBy(0, -40);
      setTimeout(backToTop, 0);
    }
  }
}
