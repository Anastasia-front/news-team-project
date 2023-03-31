export function markupOfCard(arr) {
  const mark = arr
    .map(array => {
      return `<li class="card-news__item">
 <img class="card-news__img" src="${array.photo}" alt="" loading="lazy" />
 <span class="card-news__categories">${array.category}</span>
 <button class="card-news__btn-like">
   <span class="card-news__add-to-favorite-btn"
     >Add to favorite
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
  return mark;
}
