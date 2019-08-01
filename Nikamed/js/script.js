document.addEventListener("click", function(event) {
  var target = event.target;


  //открытие/закрытие фильтра
  if (target.classList.contains("filter__btnOpen")) {
    let filter = document.querySelector(".filter");
    if (filter) {
      if (filter.dataset.mode == "open") {
        filter.dataset.mode = "close";
        document.body.classList.remove("overflowHidden"); 
      } else {
        filter.dataset.mode = "open";
        document.body.classList.add("overflowHidden"); 
      }
    }
  }

  //выбор параметров фильтра
  if (target.classList.contains("filter__item")) {
    if (target.dataset.check != "true") {
      target.dataset.check = "true";
      let filter = document.querySelector(".filter");
      let main = document.querySelector(".main");
      if (filter) {
        let filterChoice = main.querySelector(".main__filterChoice");
        let filterItemClone = target.cloneNode(true);
        filterItemClone.classList.remove("filter__item");
        filterItemClone.classList.add("filter__itemChoice");
        filterChoice.appendChild(filterItemClone);
        checkOverflow(filterChoice);
      }
    } else {
      target.dataset.check = "false";
      let filter = document.querySelector(".filter");
      let main = document.querySelector(".main");
      if (filter) {
        let filterChoice = main.querySelector(".main__filterChoice");
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
    let main = document.querySelector(".main");
    if (filter) {
      let filterChoice = main.querySelector(".main__filterChoice");
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
    let filter = document.querySelector(".filter");
    filter.dataset.mode = "close";
  }

  //отмена в фильтре
  if (target.classList.contains("filter__btn--cancel")) {
    clearFilter();
    let filter = document.querySelector(".filter");
    filter.dataset.mode = "close";
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
});

function clearFilter() {
  let filter = document.querySelector(".filter");
  if (filter) {
    let filterChoice = filter.querySelector(".filter__choice");
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

function checkOverflow(wrap) {
  let widthWrap = wrap.offsetWidth;
  let items = wrap.children;
  let widthItems = 0;

  for (var i = 0; i < items.length; i++) {
    widthItems = widthItems + items[i].offsetWidth;
  }

  if (widthItems > widthWrap) {
    console.log("Переполнение");
  }

}
