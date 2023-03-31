import { fetchImages } from "./fetch-news-categories";
import Notiflix from "notiflix";
const buttonsContainer = document.querySelector("[data-filter-btn-container]");
const gallery = document.querySelector(".card-news");
import { btnLike } from "./btn-favorite";
import { btnRead } from "./btn-read";
import { renderByWidth } from "./window-width";
import { checkLokalStorage } from "./check-local-storage";
const weatherContainer = document.querySelector(".weather_container");
const loader = document.querySelector(".loader");
const pagination = document.querySelector(".pagination");
const undefinedImages = document.querySelector(".undefined");

loader.classList.remove("hidden");
pagination.classList.add("hidden");
weatherContainer.style.display = "none";

setTimeout(() => {
  buttonsContainer.addEventListener("click", choiceFilter);
}, 1000);

function choiceFilter(e) {
  if (e.target.nodeName !== "BUTTON" || e.target.name === "") {
    return;
  } else {
    const category = `${e.target.name}.json?`;
    fetchImages(category, 0).then(proccesImageCreate);
  }
}

function proccesImageCreate(foundData) {
  const createCard = foundData.results;
  if (!createCard.length) {
    Notiflix.Notify.failure(
      "Sorry, there are no images matching your search query. Please try again."
    );
    gallery.innerHTML = "";
    undefinedImages.style.display = "block";
    weatherContainer.style.display = "none";
  } else {
    undefinedImages.style.display = "none";
    weatherContainer.style.display = "block";
    renderImageList(createCard);
  }
}

function renderImageList(card) {
  const newArray = [];
  const length = card.length;
  const numberOfCards = renderByWidth(length);
  const firstRender = card.splice(0, numberOfCards);
  const markup = firstRender
    .map(card => {
      let opacity = "";
      let hidden = "hidden";
      let localArr = JSON.parse(localStorage.getItem("readCards"));
      let check = checkLokalStorage(card, localArr);
      if (check === true) {
        opacity = "opacity";
        hidden = "";
      }
      let spanAdd = "";
      let hiddenSpan = "";
      let localFavorite = JSON.parse(localStorage.getItem("favoriteCards"));
      let checkFavorite = checkLokalStorage(card, localFavorite);
      if (checkFavorite === true) {
        hiddenSpan = "favorite";
        spanAdd = "Remove from favorite";
      } else {
        spanAdd = "Add to favorite";
      }

      const array = {
        headline:
          card.length > 50 ? card.title.slice(0, 50) + "..." : card.title,
        abstract:
          card.abstract.length > 100
            ? card.abstract.slice(0, 100) + "..."
            : card.abstract,
        category: card.section,
        pub_date: card.published_date
          .split("")
          .splice(0, 10)
          .join("")
          .replaceAll("-", "/"),
        photo: card.multimedia
          ? `${card.multimedia[2].url}`
          : "https://img.freepik.com/free-vector/internet-network-warning-404-error-page-or-file-not-found-for-web-page_1150-48326.jpg?w=996&t=st=1676297842~exp=1676298442~hmac=6cad659e6a3076ffcb73bbb246c4f7e5e1bf7cee7fa095d67fcced0a51c2405c",

        url: card.web_url,
      };
      newArray.push(array);
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
  gallery.innerHTML = markup;

  loader.classList.add("hidden");
  weatherContainer.style.display = "block";
  pagination.classList.remove("hidden");

  btnLike(newArray);
  btnRead(newArray);
}
