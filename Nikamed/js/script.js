var arrChoice = [];

document.addEventListener("click", function(event) {
  var target = event.target;


  //открытие/закрытие фильтра
  if (target.classList.contains("filter__btnOpen")) {
    if (document.querySelector(".header")) {
      if (document.querySelector(".header").dataset.filter == "open") {
        closeFilter();
      } else {
        closeAction();
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
        filterItemClone.classList.remove("filter__item");
        filterItemClone.classList.add("filter__itemChoice");
        filterChoice.appendChild(filterItemClone);
        // checkOverflow(filterChoice);
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
      }
    }
  }

  //удаление выбранных параметров фильтра
  if (target.classList.contains("filter__itemChoice")) {
    let filter = document.querySelector(".filter");
    // let main = document.querySelector(".main");
    if (filter) {
      let filterChoice = filter.querySelector(".filter__filterChoice");
      filterChoice.removeChild(target);
      let filterItems = filter.querySelectorAll(".filter__item");
      for (var i = 0; i < filterItems.length; i++) {
        if (filterItems[i].dataset.id == target.dataset.id) {
          filterItems[i].dataset.check = "false";
        }
      }
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
  let userBtn = target.closest(".user__button");
  if (userBtn) {
    let wrap = target.closest(".user");
    if (wrap.dataset.list == "show") {
      closeUser();
    } else {
      openUser();
    }
    return;
  }

  // Открытие/закрытие выпадающего окна
  let controlBtn = target.closest(".control__button--dropDown");
  if (controlBtn) {
    let wrap = target.closest(".control__wrap");
    let control = document.querySelector(".control");
    
    if (wrap.dataset.list == "show") {
      wrap.dataset.list = "hide";
    } else {
      let controlWraps = control.querySelectorAll(".control__wrap");
      for (var i = 0; i < controlWraps.length; i++) {
        controlWraps[i].dataset.list = "hide";
      }
      wrap.dataset.list = "show";
    }
    return;
  }

  // Выбор из выпадающего списка
  if (target.classList.contains("control__dropDownItem")) {
    let wrap = target.closest(".control__wrap");
    let text = target.innerHTML;

    wrap.querySelector(".control__name").innerHTML = text;
    wrap.dataset.list = "hide";

    if (wrap.classList.contains("control__wrap--layout")) {
      let allFiles = document.querySelector(".file");
      allFiles.dataset.mode = target.dataset.layout;
      wrap.dataset.mode = target.dataset.layout;
    }
  }

  // Включение режима действия с файлами
  if (target.classList.contains("control__button--action")) {
    let wrapFiles = document.querySelector(".file");

    if (wrapFiles.dataset.action == "false") {
      openAction();
    } else {
      closeAction();
    }
  }

  //выбор файла
  if (target.classList.contains("tile__btnCheck")) {
    target.dataset.check = (target.dataset.check == "false") ? "true" : "false";
    let selectedFiles = document.querySelector(".main__countSelectedFiles");
    let count = countFiles();
    selectedFiles.innerHTML = count;
    let actionBtnWrap = document.querySelector(".action__buttonWrap");
    actionBtnWrap.dataset.disabled = (count == 0) ? "true" : "false"
  }

  //открытие всплывающего окна "Добавить в коллекцию"
  if (target.classList.contains("action__button--inCollection")) {
    popOpen(document.querySelector(".pop--addToCollection"));
  }

  //открытие всплывающего окна "Скачать"
  if (target.classList.contains("action__button--download")) {
    popOpen(document.querySelector(".pop--download"));
  }

  //открытие всплывающего окна "Поделиться"
  if (target.classList.contains("action__button--share")) {
    popOpen(document.querySelector(".pop--share"));
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
  if (target.classList.contains("pop__overlay")) {
    popClose(target);
  }

  //Добавление/Удаление из коллекций во всплывающем окне
  if (target.classList.contains("pop__btnCollection")) {
    let item = target.closest(".pop__listItem");
    item.dataset.mode = (item.dataset.mode == "add") ? "remove" : "add";
  }

});

document.addEventListener("focus", function(event) {
  var target = event.target;
  if (target.classList.contains("search__input")) {
    closeFilter();
    document.querySelector(".header__tab--search").dataset.mode = "open";
  }
}, true);

document.addEventListener("blur", function(event) {
  var target = event.target;
  if (target.classList.contains("search__input")) {
    document.querySelector(".header__tab--search").dataset.mode = "close";
  }
}, true);

function popOpen(pop) {
  pop.dataset.mode = "open";
  document.body.classList.add("overflowHidden");
}

function popClose(button) {
  let pop = button.closest(".pop");
  pop.dataset.mode = "close";
  document.body.classList.remove("overflowHidden");
}
      

function closeFilter() {
  document.querySelector(".header").dataset.filter = "close";
  document.querySelector(".header__tab--filter").dataset.mode = "close";
  document.body.classList.remove("overflowHidden");
  arrChoice = [];
}

function openFilter() {
  let filter = document.querySelector(".filter");

  document.querySelector(".header").dataset.filter = "open";
  document.querySelector(".header__tab--filter").dataset.mode = "open";
  document.body.classList.add("overflowHidden");

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
      let li = document.createElement('li'); 
      li.className = "filter__itemChoice"; //добавляет стили к элементу
      li.setAttribute("data-id", arrChoice[i][0]);
      li.innerHTML = arrChoice[i][1];
      filterChoice.appendChild(li);
    }
  }
}
         

function clearFilter() {
  let filter = document.querySelector(".filter");
  if (filter) {
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

// function checkOverflow(wrap) {
//   let widthWrap = wrap.offsetWidth;
//   let items = wrap.children;
//   let widthItems = 0;

//   for (var i = 0; i < items.length; i++) {
//     widthItems = widthItems + items[i].offsetWidth;
//   }

//   if (widthItems > widthWrap) {
//     console.log("Переполнение");
//   }

// }


//подсчет количества выделенных файлов
function countFiles() {
  let wrapFiles = document.querySelector(".file");
  let filesBtnCheck = wrapFiles.querySelectorAll(".tile__btnCheck");
  let count = 0;
  for (var i = 0; i < filesBtnCheck.length; i++) {
    if (filesBtnCheck[i].dataset.check == "true") {
      count++;
    }
  }
  return count;
}

//открыть Меню пользователя
function openUser() {
  let user = document.querySelector(".user");
  let header = document.querySelector(".header");

  user.dataset.list = "show";
  header.dataset.user = "open";
}

//закрыть Меню пользователя
function closeUser() {
  let user = document.querySelector(".user");
  let header = document.querySelector(".header");

  user.dataset.list = "hide";
  header.dataset.user = "close";
}

//включить режим Действия с файлами
function openAction() {
  document.querySelector(".tile").dataset.action = "true";
  document.querySelector(".control").dataset.action = "true";
  document.querySelector(".control__button--action").innerHTML = "Отменить";
  document.querySelector(".action").dataset.status = "show";
}

//выключить режим Действия с файлами
function closeAction() {
  document.querySelector(".tile").dataset.action = "false";
  document.querySelector(".control").dataset.action = "false";
  document.querySelector(".control__button--action").innerHTML = "Выбрать";
  document.querySelector(".action").dataset.status = "hide";
  resetAction();
  document.querySelector(".action__buttonWrap").dataset.disabled = "true";
}

//сбросить кнопки Действия с файлами
function resetAction() {
  let wrapFiles = document.querySelector(".file");
  let filesBtnCheck = wrapFiles.querySelectorAll(".tile__btnCheck");
  for (var i = 0; i < filesBtnCheck.length; i++) {
    filesBtnCheck[i].dataset.check = "false";
  }
  let selectedFiles = document.querySelector(".main__countSelectedFiles");
  selectedFiles.innerHTML = "0";
}

// document.addEventListener("keydown",function(e){
//   if (e.shiftKey&&flag==0) {
//     console.log("Продолжаем!");
//     flag++
//   }
// });
