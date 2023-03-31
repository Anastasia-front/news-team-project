export function checkLokalStorage(elem, localArr) {
  if (localArr === null) {
    return;
  }
  for (let i = 0; i < localArr.length; i += 1) {
    if (localArr[i].url === elem.url) {
      return true;
    }
  }
}
export function checkLokalArray(localArr) {
  if (localArr === null) return;
  else {
    localStorage.setItem("favoriteCards", JSON.stringify(localArr));
  }
}
