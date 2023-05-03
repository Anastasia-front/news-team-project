import { markupOfCard } from './markup-of-card';

const dateListEl = document.querySelector('.date-list');
const readListSearchEl = document.querySelector('.date-list-search');
const readFormEl = document.querySelector('.search-form');
const readInputEl = document.querySelector('.search-input');
const undefinedImages = document.querySelector('.undefined');

const localData = JSON.parse(localStorage.getItem('readCards'));

function arrLocal() {
  if (localData === null) {
    undefinedImages.style.display = 'block';
    return;
  }
  return localData;
}

function sortDateReadMore(array = [], callback) {
  const groupByDate = {};
  for (const objectEl of array) {
    const key = callback(objectEl);
    if (groupByDate[key]) {
      groupByDate[key].push(objectEl);
    } else {
      groupByDate[key] = [objectEl];
    }
  }
  return groupByDate;
}

const sortDate = sortDateReadMore(arrLocal(), objectEl => objectEl.dayRead);

markupDateRead(sortDate);
function markupDateRead(date) {
  const markupBlockDate = Object.keys(date)
    .map(key => {
      return `<li class="date-list__item">
  <button class="date-list__btn"><span class="date-list__btn-text">${key}</span><span class="date-list__btn-block">
  <svg class="date-list__btn-icon" width="14" height="9" aria-hidden="true" style="position: absolute;>
<symbol id="icon-Vector-2-1" viewBox="0 0 50 32">
<path d="M5.867 0l-5.867 6.080 24.889 25.92 24.889-25.92-5.831-6.080-19.058 19.769-19.058-19.769z"></path>
</symbol>
</svg></span>
  </button>
  <ul class="list-news hidden">${markupOfCard(date[key])}</ul>
</li>`;
    })
    .join('');
  createMarkupLoadMore(markupBlockDate);
  sortItem();
}

function sortItem() {
  const dateListItem = document.querySelectorAll('.date-list__item');
  const textDate = document.querySelectorAll('.date-list__btn-text');
  const dateArr = [];
  const sortDate = [];
  let milliseconds = 0;
  textDate.forEach(element => {
    let dateString = element.innerHTML;
    let dateParts = dateString.split('/');
    let date = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
    milliseconds = date.getTime();
    dateArr.push(milliseconds);
  });

  const filterDate = dateArr.sort((a, b) => b - a);

  filterDate.forEach(element => {
    let newDate = new Date(element);
    let day = newDate.getDate().toString().padStart(2, '0');
    let month = (newDate.getMonth() + 1).toString().padStart(2, '0');
    let year = newDate.getFullYear().toString();
    let reverseDateString = day + '/' + month + '/' + year;
    sortDate.push(reverseDateString);
  });
  // ----------lastItem------------
  for (let index = 0; index < textDate.length; index++) {
    const element = textDate[index];
    if (element.innerHTML === sortDate[sortDate.length - 1]) {
      const lastItem = dateListItem[index];
      const parent = lastItem.parentNode;
      parent.appendChild(lastItem);
    } else {
      continue;
    }
  }
  // ----------firstItem------------
  for (let index = 0; index < textDate.length; index++) {
    const element = textDate[index];
    if (element.innerHTML !== sortDate[index]) {
      continue;
    } else {
      const firstItem = dateListItem[index];
      const parent = firstItem.parentNode;
      parent.prepend(firstItem);
    }
  }
  // ----------center------------
  // for (let index = 0; index < textDate.length; index++) {
  //   const element = textDate[index];
  //   if (element.innerHTML !== sortDate[index]) {
  //     continue;
  //   } else {
  //     const block1 = dateListItem[index];
  //     const block2 = dateListItem[index + 1];
  //     const parent = block1.parentNode;
  //     parent.insertBefore(block2, block1);
  //   }
  // }
}
// ------------------------ACCORDION-----------------------

dateListEl.addEventListener('click', event => {
  const btn = event.target.closest('.date-list__btn');
  if (!btn) return;

  const iconDate = btn.querySelector('.date-list__btn-block');
  const iconsDate = document.querySelectorAll('.turn');
  const listNews = document.querySelectorAll('.list-news');

  if (!btn.nextElementSibling.classList.contains('hidden')) {
    btn.nextElementSibling.classList.add('hidden');
    btn.lastElementChild.classList.remove('turn');
    return;
  }

  function isHiddenItem(arr) {
    arr.filter(list => {
      list.classList.contains('hidden');
    });
  }

  if (!isHiddenItem(Array.from(listNews))) {
    listNews.forEach(elem => {
      elem.classList.add('hidden');
    });
  }
  btn.nextElementSibling.classList.toggle('hidden');
  iconDate.classList.toggle('turn');

  iconsDate.forEach(icon => {
    if (icon !== btn.lastElementChild) {
      icon.classList.remove('turn');
    }
  });
});

function createMarkupLoadMore(markupBlockDate) {
  dateListEl.innerHTML = markupBlockDate;
}

// ------------------------SEARCH-----------------------

readFormEl.addEventListener('submit', form);

let newArrForMarkupSearch = [];

function form(event) {
  event.preventDefault();

  if (readInputEl.value.trim() === '') {
    dateListEl.classList.remove('hidden');
    undefinedImages.style.display = 'none';
    readListSearchEl.classList.add('hidden');
    return;
  } else {
    dateListEl.classList.remove('hidden');
    undefinedImages.style.display = 'block';
    readListSearchEl.classList.add('hidden');
    newArrForMarkupSearch = [];
  }

  const inputValue = readInputEl.value.toLowerCase();

  for (let i = 0; i < localData.length; i += 1) {
    let iteration = localData[i];
    if (
      iteration.abstract.toLowerCase().includes(inputValue) ||
      iteration.headline.toLowerCase().includes(inputValue) ||
      iteration.category.toLowerCase().includes(inputValue) ||
      iteration.category.toLowerCase() === inputValue
    ) {
      newArrForMarkupSearch.push(iteration);
    }
  }
  if (newArrForMarkupSearch.length === 0) {
    dateListEl.classList.add('hidden');
    readListSearchEl.classList.add('hidden');
    undefinedImages.style.display = 'block';
    newArrForMarkupSearch = [];
    return;
  }
  undefinedImages.style.display = 'none';
  dateListEl.classList.add('hidden');
  readListSearchEl.classList.remove('hidden');

  const markupBlockReadSearch = markupOfCard(newArrForMarkupSearch);

  createMarkupLoad(markupBlockReadSearch);
}

function createMarkupLoad(markupBlockDate) {
  readListSearchEl.innerHTML = markupBlockDate;
  newArrForMarkupSearch = [];
}
// ------------------------ADD-TO-FAVORITE-----------------------
const cardNews = document.querySelectorAll('.card-news__item');
cardNews.forEach(element => {
  element.addEventListener('click', btnAddToFavorite);
  let spanAdd = element.querySelector('.card-news__add-to-favorite-btn');
  let hiddenSpan = element.querySelector('.card-news__btn-like');
  let localFavorite = JSON.parse(localStorage.getItem('favoriteCards'));
  let checkFavorite = null;
  for (let index = 0; index < localFavorite.length; index++) {
    const fav = localFavorite[index];
    if (element.lastElementChild.lastElementChild.href !== fav.url) {
      continue;
    }
    checkFavorite = element.lastElementChild.lastElementChild.href === fav.url;
  }
  if (checkFavorite) {
    hiddenSpan.classList.add('favorite');
    spanAdd.innerHTML = 'Remove from favorite';
  } else {
    hiddenSpan.classList.remove('favorite');
    spanAdd.innerHTML = 'Add to favorite';
  }
});

let newLocalStorage = [];

function isLocalEmpty() {
  if (JSON.parse(localStorage.getItem('favoriteCards')) === null) {
    newLocalStorage = [];
    return;
  }
  newLocalStorage = JSON.parse(localStorage.getItem('favoriteCards'));
}
isLocalEmpty();

function btnAddToFavorite(event) {
  const btn = event.target.closest('.card-news__btn-like');
  const text = btn.querySelector('.card-news__add-to-favorite-btn');
  if (!btn) return;
  isLocalEmpty();

  if (!btn.classList.contains('favorite')) {
    btn.classList.add('favorite');
    text.textContent = 'Remove from favorite';
    addToFavoriteLocal(btn);
    return;
  }
  btn.classList.remove('favorite');
  text.textContent = 'Add to favorite';
  let title = btn.nextElementSibling.firstElementChild.textContent;
  for (let i = 0; i < newLocalStorage.length; i += 1) {
    if (newLocalStorage[i].headline === title) {
      newLocalStorage.splice(i, 1);
    }
  }
  localStorage.setItem('favoriteCards', JSON.stringify(newLocalStorage));
}

function addToFavoriteLocal(btn) {
  const favoriteCards = {
    headline: btn.nextElementSibling.firstElementChild.textContent,
    abstract: btn.nextElementSibling.lastElementChild.textContent,
    category: btn.previousElementSibling.innerHTML,
    pub_date:
      btn.nextElementSibling.nextElementSibling.firstElementChild.innerText,
    photo: btn.previousElementSibling.previousElementSibling.currentSrc,
    url: btn.nextElementSibling.nextElementSibling.lastElementChild.href,
    favorite: 'true',
  };
  for (let i = 0; i < newLocalStorage.length; i += 1) {
    if (newLocalStorage[i].url === favoriteCards.url) return;
  }

  newLocalStorage.push(favoriteCards);
  localStorage.setItem(`favoriteCards`, JSON.stringify(newLocalStorage));
}
