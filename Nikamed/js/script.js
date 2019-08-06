var arrChoice = [];

document.addEventListener("click", function(event) {
  var target = event.target;


  //открытие/закрытие фильтра
  if (target.classList.contains("filter__btnOpen")) {
    let filter = document.querySelector(".filter");
    if (filter) {
      if (filter.dataset.mode == "open") {
        closeFilter();
      } else {
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
      let allFiles = document.querySelector(".main__allFiles");
      allFiles.dataset.mode = target.dataset.layout;
      wrap.dataset.mode = target.dataset.layout;
    }
  }

  // Включение режима действия с файлами
  if (target.classList.contains("control__button--action")) {
    let wrapFiles = document.querySelector(".main__allFiles");
    let action = document.querySelector(".action");
    let actionBtnWrap = document.querySelector(".action__buttonWrap");

    if (wrapFiles.dataset.action == "false") {
      wrapFiles.dataset.action = "true";
      target.innerHTML = "Отменить";
      action.dataset.status = "show";
    } else {
      wrapFiles.dataset.action = "false";
      target.innerHTML = "Выбрать";
      action.dataset.status = "hide";
      resetAction();
      actionBtnWrap.dataset.disabled = "true";
    }
    
  }

  //выбор файла
  if (target.classList.contains("main__buttonCheck")) {
    target.dataset.check = (target.dataset.check == "false") ? "true" : "false";
    let selectedFiles = document.querySelector(".main__countSelectedFiles");
    let count = countFiles();
    selectedFiles.innerHTML = count;
    let actionBtnWrap = document.querySelector(".action__buttonWrap");
    actionBtnWrap.dataset.disabled = (count == 0) ? "true" : "false"
  }
});

function closeFilter() {
  let filter = document.querySelector(".filter");
  let button = document.querySelector(".filter__btnOpen");
  filter.dataset.mode = "close";
  button.dataset.mode = "close";
  document.body.classList.remove("overflowHidden");
  arrChoice = [];
}

function openFilter() {
  let filter = document.querySelector(".filter");
  let button = document.querySelector(".filter__btnOpen");
  filter.dataset.mode = "open";
  button.dataset.mode = "open";
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
  let wrapFiles = document.querySelector(".main__allFiles");
  let filesBtnCheck = wrapFiles.querySelectorAll(".main__buttonCheck");
  let count = 0;
  for (var i = 0; i < filesBtnCheck.length; i++) {
    if (filesBtnCheck[i].dataset.check == "true") {
      count++;
    }
  }
  return count;
}

function resetAction() {
  let wrapFiles = document.querySelector(".main__allFiles");
  let filesBtnCheck = wrapFiles.querySelectorAll(".main__buttonCheck");
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
