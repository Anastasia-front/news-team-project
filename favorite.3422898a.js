function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},l=t.parcelRequired7c6;null==l&&((l=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var l={id:e,exports:{}};return n[e]=l,t.call(l.exports,l,l.exports),l.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=l),l.register("2W2ge",(function(e,t){var n=l("10QHX"),r=l("8EHkZ"),i=l("1VWkq");const a=document.querySelector(".undefined"),o=document.querySelector(".search-input");document.querySelector(".search-form").addEventListener("submit",(e=>{e.preventDefault();let t=o.value.toLowerCase().trim(),n=JSON.parse(localStorage.getItem("favoriteCards"));if(null===n)return;let r=function(e,t){return e.reduce(((e,n)=>((n.headline.toLowerCase().includes(t)||n.abstract.toLowerCase().includes(t)||n.category.toLowerCase().includes(t))&&e.push(n),e)),[])}(n,t);if(0===r.length)return s.innerHTML="",void(a.style.display="block");""!==t&&null!==t||(a.style.display="block");let l=d(r);s.innerHTML=l,a.style.display="none"}));const s=document.querySelector(".card-news");s.addEventListener("click",(function(e){const t=e.target.closest(".card-news__add-to-favorite-btn");if(!t)return;c||(a.style.display="block");let n=t.parentNode.nextElementSibling.firstElementChild.textContent;for(let e=0;e<c.length;e+=1)c[e].headline===n&&c.splice(e,1);if(localStorage.setItem("favoriteCards",JSON.stringify(c)),t.parentNode.parentNode.remove(),0===s.childElementCount)return void(a.style.display="block")}));const c=JSON.parse(localStorage.getItem("favoriteCards"));function d(e){const t=e.map((e=>{let t="",r="hidden",l=JSON.parse(localStorage.getItem("readCards"));!0===(0,n.checkLokalStorage)(e,l)&&(t="opacity",r="");let i="",a="",o=JSON.parse(localStorage.getItem("favoriteCards"));return!0===(0,n.checkLokalStorage)(e,o)?(a="favorite",i="Remove from favorite"):i="Add to favorite",`<li class="card-news__item ">\n        <img class="card-news__img ${t}" src="${e.photo}" alt="" loading="lazy" />\n        <span class="card-news__categories">${e.category}</span>\n        <span class="card-news__read ${r} ">Already read \n      <svg\n              class="icon-read"\n              width="15"\n              height="15"\n              viewBox="0 0 43 32"\n            >\n            <path fill="#00dd73" style="fill: var(--color1, #00dd73)" d="M40.502 1.584c-0.415 0.012-0.81 0.186-1.1 0.484l-24.469 24.469-10.069-10.069c-0.147-0.154-0.324-0.276-0.519-0.361s-0.406-0.129-0.619-0.131c-0.213-0.002-0.424 0.038-0.621 0.119s-0.376 0.199-0.527 0.35c-0.151 0.151-0.269 0.33-0.35 0.527s-0.121 0.408-0.119 0.621c0.002 0.213 0.047 0.423 0.131 0.619s0.207 0.372 0.361 0.519l11.2 11.2c0.3 0.3 0.707 0.469 1.131 0.469s0.831-0.169 1.131-0.469l25.6-25.6c0.231-0.225 0.389-0.514 0.453-0.83s0.031-0.644-0.095-0.941c-0.126-0.297-0.338-0.549-0.609-0.723s-0.589-0.262-0.911-0.253z"></path>\n            </svg></span>\n        <button class="card-news__btn-like ${a}">\n          <span class="card-news__add-to-favorite-btn"\n            >${i}\n          </span>\n          <svg\n              class="card-news__icon-like"\n              width="16"\n              height="16"\n              viewBox="0 0 37 32"\n            >\n              <path\n                style="stroke: var(--color1, #4440f7)"\n                stroke-linejoin="round"\n                stroke-linecap="round"\n                stroke-miterlimit="4"\n                stroke-width="2.2857"\n                d="M10.666 2.286c-4.207 0-7.619 3.377-7.619 7.543 0 3.363 1.333 11.345 14.458 19.413 0.235 0.143 0.505 0.219 0.78 0.219s0.545-0.076 0.78-0.219c13.125-8.069 14.458-16.050 14.458-19.413 0-4.166-3.412-7.543-7.619-7.543s-7.619 4.571-7.619 4.571-3.412-4.571-7.619-4.571z"\n              ></path>\n            </svg>\n        </button>\n        <div class="card-news__wrapper">\n          <h3 class="card-news__caption">${e.headline}</h3>\n          <p class="card-news__text">${e.abstract}</p>\n        </div>\n        <div class="card-news__box">\n          <span class="card-news__time">${e.pub_date}</span>\n          <a class="card-news__link" target="_blank" href="${e.url}">Read more</a>\n        </div>\n        </li>`})).join("");return(0,r.btnLike)(),(0,i.btnRead)(t),t}null!==c?function(){if(null===localStorage.getItem("favoriteCards"))return;if(0===JSON.parse(localStorage.getItem("favoriteCards")).length)return console.log("error"),void(a.style.display="block");const e=d(JSON.parse(localStorage.getItem("favoriteCards")));s.insertAdjacentHTML("beforeend",e)}():a.style.display="block"})),l.register("10QHX",(function(t,n){function r(e,t){if(null!==t)for(let n=0;n<t.length;n+=1)if(t[n].url===e.url)return!0}e(t.exports,"checkLokalStorage",(function(){return r}))})),l.register("8EHkZ",(function(t,n){function r(){document.querySelectorAll(".card-news__item").forEach((e=>{e.addEventListener("click",n)}));let e=[];function t(){e=null!==JSON.parse(localStorage.getItem("favoriteCards"))?JSON.parse(localStorage.getItem("favoriteCards")):[]}function n(n){const r=n.target.closest(".card-news__btn-like"),l=r.querySelector(".card-news__add-to-favorite-btn");if(!r)return;if(t(),!r.classList.contains("favorite"))return r.classList.add("favorite"),l.textContent="Remove from favorite",void function(n){t();const r={headline:n.nextElementSibling.firstElementChild.textContent,abstract:n.nextElementSibling.lastElementChild.textContent,category:n.previousElementSibling.previousElementSibling.innerHTML,pub_date:n.nextElementSibling.nextElementSibling.firstElementChild.innerText,photo:n.previousElementSibling.previousElementSibling.previousElementSibling.currentSrc,url:n.nextElementSibling.nextElementSibling.lastElementChild.href,favorite:"true"};for(let t=0;t<e.length;t+=1)if(e[t].url===r.url)return;e.push(r),localStorage.setItem("favoriteCards",JSON.stringify(e))}(r);r.classList.remove("favorite"),l.textContent="Add to favorite";let i=r.nextElementSibling.firstElementChild.textContent;for(let t=0;t<e.length;t+=1)e[t].headline===i&&e.splice(t,1);localStorage.setItem("favoriteCards",JSON.stringify(e))}t()}e(t.exports,"btnLike",(function(){return r}))})),l.register("1VWkq",(function(t,n){function r(e){const t=[],n=document.querySelectorAll(".card-news__link"),r=document.querySelectorAll(".card-news__read"),l=document.querySelectorAll(".card-news__img");return n.forEach(((e,t)=>{let n=!1;e.addEventListener("click",(()=>{n?(l[t].classList.remove("opacity"),n=!1):(r[t].classList.remove("hidden"),l[t].classList.add("opacity"),n=!0)}))})),n.forEach(((n,r)=>{let l=!1;n.addEventListener("click",(()=>{l||(t.push(i(e[r])),localStorage.setItem("readCards",JSON.stringify(t)),l=!0)}))})),t}e(t.exports,"btnRead",(function(){return r}));document.querySelector(".card-news").addEventListener("click",(function(e){const t=e.target.closest(".card-news__link");if(!t)return;i(t)}));let l=[];function i(e){const t=(new Date).toLocaleDateString([],{year:"numeric",month:"numeric",day:"numeric"}).replaceAll(".","/"),n={headline:e.parentNode.previousElementSibling.firstElementChild.innerText,abstract:e.parentNode.previousElementSibling.lastElementChild.innerText,category:e.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML,pub_date:e.previousElementSibling.innerText,photo:e.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.currentSrc,url:e.href,dayRead:t};for(let e=0;e<l.length;e+=1)if(l[e].url===n.url)return;l.push(n),localStorage.setItem("readCards",JSON.stringify(l))}!function(){if(null===JSON.parse(localStorage.getItem("readCards")))return;l=JSON.parse(localStorage.getItem("readCards"))}()})),l("2W2ge");
//# sourceMappingURL=favorite.3422898a.js.map