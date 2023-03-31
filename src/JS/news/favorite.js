// // Получаем данные из localStorage и преобразуем их из JSON-строки в объект
// const storedData = JSON.parse(localStorage.getItem("favoriteCards"));

// // Сортируем объекты по дате сохранения (предполагается, что у каждого объекта есть свойство "date")
// storedData.sort((a, b) => new Date(b.pub_date) - new Date(a.pub_date));

// // Выводим объекты на страницу
// const container = document.querySelector(".container");
// storedData.forEach(item => {
//   const element = document.createElement("div");
//   element.textContent = item.data;
//   container.appendChild(element);
// });
import { checkLokalStorage } from "./check-local-storage";
import { btnLike } from "./btn-favorite";
import { btnRead } from "./btn-read";
const undefinedImages = document.querySelector(".undefined");

const inputEl = document.querySelector(".search-input"),
  formEl = document.querySelector(".search-form");

formEl.addEventListener("submit", event => {
  event.preventDefault();

  let value = inputEl.value.toLowerCase().trim();
  let arr = getLocalarr();
  if (arr === null) return;
  let hits = checkArr(arr, value);

  if (hits.length === 0) {
    newList.innerHTML = "";
    undefinedImages.style.display = "block";
    return;
  }
  if (value === "" || value === null) {
    undefinedImages.style.display = "block";
  }
  let markup = createMarkup(hits);
  newList.innerHTML = markup;
  undefinedImages.style.display = "none";
});

function getLocalarr() {
  return JSON.parse(localStorage.getItem("favoriteCards"));
}
function checkArr(arr, value) {
  return arr.reduce((hits, elem) => {
    if (
      elem.headline.toLowerCase().includes(value) ||
      elem.abstract.toLowerCase().includes(value) ||
      elem.category.toLowerCase().includes(value)
    ) {
      hits.push(elem);
    }
    return hits;
  }, []);
}

const newList = document.querySelector(".card-news");

// document
//   .querySelector('.news-loader__container.container')
//   .classList.add('is-hidden');

// document.querySelector('.page-container').classList.add('pagination-hidden');
// document
//   .querySelector('.page-container-cat')
//   .classList.add('pagination-cat-hidden');

newList.addEventListener("click", removeToFavorite);
const dataInLocal = JSON.parse(localStorage.getItem("favoriteCards"));

if (dataInLocal === null) {
  undefinedImages.style.display = "block";
  return;
}
function removeToFavorite(e) {
  const btn = e.target.closest(`.card-news__add-to-favorite-btn`);
  if (!btn) return;
  if (!dataInLocal) {
    undefinedImages.style.display = "block";
  }
  let title = btn.parentNode.nextElementSibling.firstElementChild.textContent;

  for (let i = 0; i < dataInLocal.length; i += 1) {
    if (dataInLocal[i].headline === title) {
      dataInLocal.splice(i, 1);
    }
  }
  localStorage.setItem(`favoriteCards`, JSON.stringify(dataInLocal));
  btn.parentNode.parentNode.remove();
  if (newList.childElementCount === 0) {
    undefinedImages.style.display = "block";
    return;
  }
}

function getLocalData() {
  if (localStorage.getItem("favoriteCards") === null) return;
  if (JSON.parse(localStorage.getItem("favoriteCards")).length === 0) {
    console.log("error");
    undefinedImages.style.display = "block";
    return;
  }
  const data = JSON.parse(localStorage.getItem("favoriteCards"));
  const markup = createMarkup(data);
  newList.insertAdjacentHTML("beforeend", markup);
}

getLocalData();

function createMarkup(arr) {
  const newArr = arr
    .map(array => {
      let opacity = "";
      let hidden = "hidden";
      let localArr = JSON.parse(localStorage.getItem("readCards"));
      let check = checkLokalStorage(array, localArr);
      if (check === true) {
        opacity = "opacity";
        hidden = "";
      }
      let spanAdd = "";
      let hiddenSpan = "";
      let localFavorite = JSON.parse(localStorage.getItem("favoriteCards"));
      let checkFavorite = checkLokalStorage(array, localFavorite);
      if (checkFavorite === true) {
        hiddenSpan = "favorite";
        spanAdd = "Remove from favorite";
      } else {
        spanAdd = "Add to favorite";
      }
      return `<li class="card-news__item ">
        <img class="card-news__img ${opacity}" src="${array.photo}" alt="" loading="lazy" />
        <span class="card-news__categories">${array.category}</span>
        <span class="card-news__read ${hidden} ">Already read 
      <svg
              class="icon-read"
              width="15"
              height="15"
              viewBox="0 0 43 32"
            >
            <path fill="#00dd73" style="fill: var(--color1, #00dd73)" d="M40.502 1.584c-0.415 0.012-0.81 0.186-1.1 0.484l-24.469 24.469-10.069-10.069c-0.147-0.154-0.324-0.276-0.519-0.361s-0.406-0.129-0.619-0.131c-0.213-0.002-0.424 0.038-0.621 0.119s-0.376 0.199-0.527 0.35c-0.151 0.151-0.269 0.33-0.35 0.527s-0.121 0.408-0.119 0.621c0.002 0.213 0.047 0.423 0.131 0.619s0.207 0.372 0.361 0.519l11.2 11.2c0.3 0.3 0.707 0.469 1.131 0.469s0.831-0.169 1.131-0.469l25.6-25.6c0.231-0.225 0.389-0.514 0.453-0.83s0.031-0.644-0.095-0.941c-0.126-0.297-0.338-0.549-0.609-0.723s-0.589-0.262-0.911-0.253z"></path>
            </svg></span>
        <button class="card-news__btn-like ${hiddenSpan}">
          <span class="card-news__add-to-favorite-btn"
            >${spanAdd}
          </span>
          <svg
              class="card-news__icon-like"
              width="16"
              height="16"
              viewBox="0 0 37 32"
            >
              <path
                style="stroke: var(--color1, #4440f7)"
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-miterlimit="4"
                stroke-width="2.2857"
                d="M10.666 2.286c-4.207 0-7.619 3.377-7.619 7.543 0 3.363 1.333 11.345 14.458 19.413 0.235 0.143 0.505 0.219 0.78 0.219s0.545-0.076 0.78-0.219c13.125-8.069 14.458-16.050 14.458-19.413 0-4.166-3.412-7.543-7.619-7.543s-7.619 4.571-7.619 4.571-3.412-4.571-7.619-4.571z"
              ></path>
            </svg>
        </button>
        <div class="card-news__wrapper">
          <h3 class="card-news__caption">${array.headline}</h3>
          <p class="card-news__text">${array.abstract}</p>
        </div>
        <div class="card-news__box">
          <span class="card-news__time">${array.pub_date}</span>
          <a class="card-news__link" target="_blank" href="${array.url}">Read more</a>
        </div>
        </li>`;
    })
    .join("");
  btnLike(newArr);
  btnRead(newArr);
  return newArr;
}
// document.querySelector('.news-loader__container ').classList.add('is-hidden');
