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
