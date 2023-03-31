let windowWidth;
let wetherPosition;

export function renderByWidth(length) {
  if (window.innerWidth < 768) {
    windowWidth = 5;
    wetherPosition = -1;
    if (length > windowWidth) {
      return 5;
    } else {
      return length;
    }
  }
  if (window.innerWidth >= 768 && window.innerWidth < 1280) {
    windowWidth = 8;
    wetherPosition = 0;
    if (length > windowWidth) {
      return 8;
    } else {
      return length;
    }
  }
  if (window.innerWidth >= 1280) {
    windowWidth = 9;
    wetherPosition = 1;
    if (length > windowWidth) {
      return 9;
    } else {
      return length;
    }
  }
}
