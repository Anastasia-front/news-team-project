export function btnRead(newArray) {
  const readCards = [];
  const btnRead = document.querySelectorAll(".card-news__link");
  const iconRead = document.querySelectorAll(".card-news__read");
  const img = document.querySelectorAll(".card-news__img");

  btnRead.forEach((btn, index) => {
    let isRead = false; // начальное значение

    btn.addEventListener("click", () => {
      if (!isRead) {
        iconRead[index].classList.remove("hidden");
        img[index].classList.add("opacity");
        isRead = true; // обновить значение
      } else {
        img[index].classList.remove("opacity");
        isRead = false; // обновить значение
      }
    });
  });

  btnRead.forEach((btn, index) => {
    let isRead = false;
    btn.addEventListener("click", () => {
      if (!isRead) {
        // Добавляем информацию о карточке в массив
        readCards.push(addReadMore(newArray[index]));
        // Обновляем локальное хранилище
        localStorage.setItem("readCards", JSON.stringify(readCards));
        isRead = true;
      }
      //   else {
      //     // Удаляем информацию о карточке из массива
      //     const cardIndex = readCards.findIndex(
      //       card => card.headline === newArray[index].headline
      //     );
      //     if (cardIndex !== -1) {
      //       readCards.splice(cardIndex, 1);
      //       // Обновляем локальное хранилище
      //       localStorage.setItem("readCards", JSON.stringify(readCards));
      //     }
      //     isRead = false;
      //   }
    });
  });
  //   console.log(readCards);
  return readCards;
}

const cardNews = document.querySelector(".card-news");
cardNews.addEventListener("click", linkReadMore);

let readMoreId = [];
isLocalEmpty();

function isLocalEmpty() {
  if (JSON.parse(localStorage.getItem("readCards")) === null) {
    return;
  }
  readMoreId = JSON.parse(localStorage.getItem("readCards"));
}

function linkReadMore(event) {
  const readMore = event.target.closest(`.card-news__link`);
  if (!readMore) return;
  addReadMore(readMore);
}

function addReadMore(readMore) {
  const evenDateNow = new Date();
  const options = { year: "numeric", month: "numeric", day: "numeric" };
  const readDateNow = evenDateNow
    .toLocaleDateString([], options)
    .replaceAll(".", "/");
  const read = {
    headline:
      readMore.parentNode.previousElementSibling.firstElementChild.innerText,
    abstract:
      readMore.parentNode.previousElementSibling.lastElementChild.innerText,
    category:
      readMore.parentNode.previousElementSibling.previousElementSibling
        .previousElementSibling.previousElementSibling.innerHTML,
    pub_date: readMore.previousElementSibling.innerText,
    photo:
      readMore.parentNode.previousElementSibling.previousElementSibling
        .previousElementSibling.previousElementSibling.previousElementSibling
        .currentSrc,
    url: readMore.href,

    dayRead: readDateNow,
  };
  for (let i = 0; i < readMoreId.length; i += 1) {
    if (readMoreId[i].url === read.url) {
      return;
    }
  }
  readMoreId.push(read);
  localStorage.setItem(`readCards`, JSON.stringify(readMoreId));
}
