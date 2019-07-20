document.addEventListener("click", function(event) {
  var target = event.target;


  //открытие/закрытие фильтра
  if (target.classList.contains("filter__btnOpen")) {
    let filter = document.querySelector(".filter");
    if (filter) {
      if (filter.dataset.mode == "open") {
        filter.dataset.mode = "close";
      } else {
        filter.dataset.mode = "open";
      }
    }
  }

  //выбор параметров фильтра
  if (target.classList.contains("filter__item")) {
    if (target.dataset.check != "true") {
      target.dataset.check = "true";
      let filter = document.querySelector(".filter");
      if (filter) {
        let filterChoice = filter.querySelector(".filter__choice");
        let filterItemClone = target.cloneNode(true);
        filterItemClone.classList.remove("filter__item");
        filterItemClone.classList.add("filter__itemChoice");
        filterChoice.appendChild(filterItemClone);
      }
    } else {
      target.dataset.check = "false";
      let filter = document.querySelector(".filter");
      if (filter) {
        let filterChoice = filter.querySelector(".filter__choice");
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
    if (filter) {
      let filterChoice = filter.querySelector(".filter__choice");
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
  if (target.classList.contains("filter__btnApply")) {
    let filter = document.querySelector(".filter");
    filter.dataset.mode = "close";
  }

  //отмена в фильтре
  if (target.classList.contains("filter__btnCancel")) {
    clearFilter();
    let filter = document.querySelector(".filter");
    filter.dataset.mode = "close";
  }


  //сбросить все фильтры
  if (target.classList.contains("filter__btnReset")) {
    clearFilter();
  }

  //переключение раскладки
  if (target.classList.contains("main__btnLayout")) {
    let allFiles = document.querySelector(".main__allFiles");
    if (allFiles) {
      allFiles.dataset.mode = (allFiles.dataset.mode == "sizeM") ? "sizeL" : "sizeM";
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
