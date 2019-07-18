document.addEventListener("click", function(event) {
  var target = event.target;
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
});
