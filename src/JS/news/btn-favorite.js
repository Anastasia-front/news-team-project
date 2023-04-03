export function btnLike() {
  const cardNews = document.querySelectorAll('.card-news__item');
  cardNews.forEach(element => {
    element.addEventListener('click', btnAddToFavorite);
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
    isLocalEmpty();
    const favoriteCards = {
      headline: btn.nextElementSibling.firstElementChild.textContent,
      abstract: btn.nextElementSibling.lastElementChild.textContent,
      category: btn.previousElementSibling.previousElementSibling.innerHTML,
      pub_date:
        btn.nextElementSibling.nextElementSibling.firstElementChild.innerText,
      photo:
        btn.previousElementSibling.previousElementSibling.previousElementSibling
          .currentSrc,
      url: btn.nextElementSibling.nextElementSibling.lastElementChild.href,
      favorite: 'true',
    };
    for (let i = 0; i < newLocalStorage.length; i += 1) {
      if (newLocalStorage[i].url === favoriteCards.url) return;
    }

    newLocalStorage.push(favoriteCards);
    localStorage.setItem(`favoriteCards`, JSON.stringify(newLocalStorage));
  }
}
