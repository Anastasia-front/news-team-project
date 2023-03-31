// import { getNews } from "../news/fetch-news-popular";
// import * as pop from "../news/render-popular";
// import { renderByWidth } from "./window-width";
// import * as num from "./pagination";
// import { markupOfCard } from "../news/markup-of-card";
// // const cardLength = getNews().then(r => {
// //   console.log(funcExp(r, r.slice(4)));
// // });

// num.num2.addEventListener("click", getNews().then(firstImageList));
// export function firstImageList(card) {
//   const newArray = [];
//   const length = card.length;
//   const numberOfCards = renderByWidth(length);
//   const firstRender = card.splice(0, numberOfCards);
//   //   funcExp(lenght, card.splice(numberOfCards));
//   const markup = firstRender
//     .map(card => {
//       const array = {
//         headline: card.title,
//         abstract:
//           card.abstract.length > 100
//             ? card.abstract.slice(0, 100) + "..."
//             : card.abstract,
//         category: card.section,
//         pub_date: card.published_date
//           .split("")
//           .splice(0, 10)
//           .join("")
//           .replaceAll("-", "/"),
//         url: card.url,
//         photo: card.media
//           ? `${card.media[0]["media-metadata"][2].url}`
//           : "https://img.freepik.com/free-vector/internet-network-warning-404-error-page-or-file-not-found-for-web-page_1150-48326.jpg?w=996&t=st=1676297842~exp=1676298442~hmac=6cad659e6a3076ffcb73bbb246c4f7e5e1bf7cee7fa095d67fcced0a51c2405c",
//         url: card.url,
//       };
//       newArray.push(array);
//       return markupOfCard(array);
//     })
//     .join("");

//   newsCard.innerHTML = markup;
//   btnLike(newArray);
//   btnRead(newArray);
// }

// function secondImageList(card) {
//     const newArray = [];
//     const length = card.length;
//     const numberOfCards = renderByWidth(length);
//     const firstRender = card.splice(0, numberOfCards);
//     //   funcExp(lenght, card.splice(numberOfCards));
//     const markup = firstRender
//       .map(card => {
//         const array = {
//           headline: card.title,
//           abstract:
//             card.abstract.length > 100
//               ? card.abstract.slice(0, 100) + "..."
//               : card.abstract,
//           category: card.section,
//           pub_date: card.published_date
//             .split("")
//             .splice(0, 10)
//             .join("")
//             .replaceAll("-", "/"),
//           url: card.url,
//           photo: card.media
//             ? `${card.media[0]["media-metadata"][2].url}`
//             : "https://img.freepik.com/free-vector/internet-network-warning-404-error-page-or-file-not-found-for-web-page_1150-48326.jpg?w=996&t=st=1676297842~exp=1676298442~hmac=6cad659e6a3076ffcb73bbb246c4f7e5e1bf7cee7fa095d67fcced0a51c2405c",
//           url: card.url,
//         };
//         newArray.push(array);
//         return markupOfCard(array);
//       })
//       .join("");

//     newsCard.innerHTML = markup;
//     btnLike(newArray);
//     btnRead(newArray);
//   }
