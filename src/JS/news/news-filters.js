const buttonsContainer = document.querySelector("[data-filter-btn-container]");

buttonsContainer.addEventListener("click", choiceFilter);

let buttonSelected = "";

function choiceFilter(e) {
  if (e.target.nodeName !== "BUTTON" || e.target.name === "") {
    return;
  }

  e.target.classList.add("active-filter");

  buttonSelected?.classList?.remove("active-filter");

  buttonSelected = e.target;
}
