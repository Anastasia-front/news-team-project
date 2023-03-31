// import { fetchImages } from "./fetch-news-search";
// import Notiflix from "notiflix";

// const input = document.querySelector(".search-input");
// const btnSearch = document.querySelector(".open-input");
// const form = document.querySelector(".search-form");
// const newsCard = document.querySelector(".card-news");
// let favoriteCards = [];
// form.addEventListener("submit", onBtnCreate);

// function onBtnCreate(event) {
//   event.preventDefault();
//   const searchFormInput = input.value.trim();
//   console.log(searchFormInput);
//   if (!searchFormInput) {
//     return;
//   }
//   fetchImages(searchFormInput, 7).then(proccesImageCreate);
// }

// function proccesImageCreate(foundData) {
//   console.log(foundData);
//   const createCard = foundData.response.docs;
//   if (!createCard.length) {
//     Notiflix.Notify.failure(
//       "Sorry, there are no images matching your search query. Please try again."
//     );
//   } else {
//     renderImageList(createCard);
//   }

//   const btnLike = document.querySelectorAll(".card-news__btn-like");
//   const spanAdd = document.querySelectorAll(".card-news__add-to-favorite-btn");
//   const iconLike = document.querySelectorAll(".card-news__icon-like");

//   btnLike.forEach((btn, index) => {
//     let isFavorite = false; // начальное значение

//     btn.addEventListener("click", () => {
//       if (!isFavorite) {
//         spanAdd[index].textContent = "Remove from favorite";
//         iconLike[index].style.fill = "var(--color1, #4440f7)";
//         btn.classList.add("favorite"); // добавить класс
//         isFavorite = true; // обновить значение
//       } else {
//         spanAdd[index].textContent = "Add to favorite";
//         iconLike[index].style.fill = "";
//         btn.classList.remove("favorite"); // убрать класс
//         isFavorite = false; // обновить значение
//       }
//     });
//   });
// }

// function renderImageList(card) {
//   let newArray = [];
//   const markup = card
//     .map(card => {
//       const array = {
//         headline: card.headline.main,
//         abstract: card.abstract,
//         category: card.section_name,
//         pub_date: card.pub_date.slice(0, 10),
//         photo: card.multimedia.length
//           ? `https://static01.nyt.com/${card.multimedia[0].url}`
//           : "https://img.freepik.com/free-vector/internet-network-warning-404-error-page-or-file-not-found-for-web-page_1150-48326.jpg?w=996&t=st=1676297842~exp=1676298442~hmac=6cad659e6a3076ffcb73bbb246c4f7e5e1bf7cee7fa095d67fcced0a51c2405c",
//         url: card.web_url,
//       };
//       newArray.push(array);

//       return `<li class="card-news__item">
//   <img class="card-news__img" src="${array.photo}" alt="" loading="lazy" />
//   <span class="card-news__categories">${array.category}</span>
//   <button class="card-news__btn-like">
//     <span class="card-news__add-to-favorite-btn"
//       >Add to favorite
//     </span>
//     <svg
//         class="card-news__icon-like"
//         width="16"
//         height="16"
//         viewBox="0 0 37 32"
//       >
//         <path
//           style="stroke: var(--color1, #4440f7)"
//           stroke-linejoin="round"
//           stroke-linecap="round"
//           stroke-miterlimit="4"
//           stroke-width="2.2857"
//           d="M10.666 2.286c-4.207 0-7.619 3.377-7.619 7.543 0 3.363 1.333 11.345 14.458 19.413 0.235 0.143 0.505 0.219 0.78 0.219s0.545-0.076 0.78-0.219c13.125-8.069 14.458-16.050 14.458-19.413 0-4.166-3.412-7.543-7.619-7.543s-7.619 4.571-7.619 4.571-3.412-4.571-7.619-4.571z"
//         ></path>
//       </svg>
//   </button>
//   <div class="card-news__wrapper">
//     <h3 class="card-news__caption">${array.headline}</h3>
//     <p class="card-news__text">${array.abstract}</p>
//   </div>
//   <div class="card-news__box">
//     <span class="card-news__time">${array.pub_date}</span>
//     <a class="card-news__link" href="${array.url}">Read more</a>
//   </div>
// </li>`;
//     })
//     .join("");
//   newsCard.innerHTML = markup;

//   const btnLike = document.querySelectorAll(".card-news__btn-like");
//   btnLike.forEach((btn, index) => {
//     let isFavorite = false;
//     btn.addEventListener("click", () => {
//       if (!isFavorite) {
//         // Добавляем информацию о карточке в массив
//         favoriteCards.push({
//           headline: newArray[index].headline,
//           abstract: newArray[index].abstract,
//           category: newArray[index].category,
//           pub_date: newArray[index].pub_date,
//           photo: newArray[index].photo,
//           url: newArray[index].url,
//         });
//         // Обновляем локальное хранилище
//         localStorage.setItem("favoriteCards", JSON.stringify(favoriteCards));
//         isFavorite = true;
//       } else {
//         // Удаляем информацию о карточке из массива
//         const cardIndex = favoriteCards.findIndex(
//           card => card.headline === newArray[index].headline
//         );
//         if (cardIndex !== -1) {
//           favoriteCards.splice(cardIndex, 1);
//           // Обновляем локальное хранилище
//           localStorage.setItem("favoriteCards", JSON.stringify(favoriteCards));
//         }
//         isFavorite = false;
//       }
//     });
//   });
// }
