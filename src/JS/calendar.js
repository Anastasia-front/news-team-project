const daysTag = document.querySelector(".days"),
  currentDate = document.querySelector(".current-date"),
  prevNextIcon = document.querySelectorAll(".calendar-icons span");

let date = new Date(),
  currDay = date.getDate(),
  currMonth = date.getMonth(),
  currYear = date.getFullYear();

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("body"),
    modal: document.querySelector("[data-modal]"),
    input: document.querySelector(".calendar-input"),
    arrow: document.querySelector(".calendar__button-arrow"),
    calendarBtn: document.querySelector(".calendar__button-calendar"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  document.addEventListener("click", hideModals);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden-wrapper");
    refs.input.classList.toggle("isActive");
    refs.arrow.classList.toggle("switched");
    refs.calendarBtn.classList.toggle("switchedColor");
  }

  function hideModals(evt) {
    document.getElementById("input-picker").value;
    if (evt.target.closest(".calendar-form")) {
      return;
    }
    if (refs.input.classList.contains("isActive")) {
      refs.modal.classList.add("is-hidden-wrapper");
      refs.input.classList.remove("isActive");
      refs.arrow.classList.remove("switched");
      refs.calendarBtn.classList.remove("switchedColor");
      document.getElementById("input-picker").value = "";
      localStorage.removeItem("VALUE");
      localStorage.removeItem("date");
    }
  }
})();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const renderCalendar = () => {
  let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(),
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(),
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
  let liTag = "";
  for (let i = firstDayofMonth; i > 0; i--) {
    liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
  }

  for (let i = 1; i <= lastDateofMonth; i++) {
    let isToday =
      i === date.getDate() &&
      currMonth === new Date().getMonth() &&
      currYear === new Date().getFullYear();

    liTag += `<li class="${isToday}">${i}</li>`;
  }
  for (let i = lastDayofMonth; i < 6; i++) {
    liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
  }
  currentDate.innerText = `${months[currMonth]} ${currYear}`;
  daysTag.innerHTML = liTag;
  const dayChange = document.querySelector(".days");

  dayChange.addEventListener("click", evt => {
    [...evt.currentTarget.children].forEach(item => {
      item.classList.remove("active");
    });

    evt.target.classList.add("active");
    let newValueDay = evt.target.textContent;
    if (evt.target.textContent.length > 10) {
      return;
    }
    let month = (currMonth + 1).toString();
    document.getElementById("input-picker").value =
      currYear +
      "/" +
      month.padStart(2, "0") +
      "/" +
      newValueDay.padStart(2, "0");

    localStorage.setItem("VALUE", JSON.stringify(newValueDay));

    let inputDateValue = document.querySelector(".calendar-input").value;
    localStorage.setItem("date", JSON.stringify(inputDateValue));
    document.querySelector("[data-modal]").classList.add("is-hidden-wrapper");
    document.querySelector(".calendar-input").classList.remove("isActive");
    document
      .querySelector(".calendar__button-arrow")
      .classList.remove("switched");
    document
      .querySelector(".calendar__button-calendar")
      .classList.remove("switchedColor");
  });
  //}
};

renderCalendar();
let findUl = document.querySelector(".days");

prevNextIcon.forEach(icon => {
  icon.addEventListener("click", () => {
    currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
    if (currMonth < 0 || currMonth > 11) {
      date = new Date(currYear, currMonth, new Date().getDate());
      currYear = date.getFullYear();
      currMonth = date.getMonth();
    } else {
      date = new Date();
    }
    renderCalendar();
    let test = JSON.parse(localStorage.getItem("VALUE"));
    let reachUl = daysTag.childNodes;
    reachUl.forEach(elem => {
      if (elem.textContent === test) {
        elem.classList.add("active");
      }
    });
  });
});

localStorage.removeItem("VALUE");
localStorage.removeItem("date");
