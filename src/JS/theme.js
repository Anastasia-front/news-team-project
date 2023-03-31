const body = document.querySelector("body");
const iconSun = document.querySelector(".theme-icon__sun");
const iconMoon = document.querySelector("theme-icon__moon");
const checkbox = document.querySelector(".checkbox");
const slider = document.querySelector(".slider");
const mobCheckbox = document.querySelector(".mob-checkbox");
const mobSlider = document.querySelector(".mob-slider");

checkbox.addEventListener("click", changeTheme);
slider.addEventListener("click", changeTheme);
mobSlider.addEventListener("click", changeTheme);
mobCheckbox.addEventListener("click", changeTheme);
checkbox.addEventListener("click", change);
slider.addEventListener("click", change);
mobCheckbox.addEventListener("click", change);
mobSlider.addEventListener("click", change);

body.className = localStorage.getItem("theme");

if (localStorage.getItem("slider") != null) {
  slider.classList.add(localStorage.getItem("slider"));
  checkbox.classList.add(localStorage.getItem("checkbox"));
  mobCheckbox.classList.add(localStorage.getItem("checkbox"));
  mobSlider.classList.add(localStorage.getItem("slider"));
}
function changeTheme() {
  body.classList.toggle("dark-theme");
  body.classList.toggle("light-theme");
  if (body.classList.contains("dark-theme")) {
    localStorage.setItem("theme", "dark-theme");
    localStorage.setItem("slider", "slideractive");
    localStorage.setItem("checkbox", "checkbox-active");
  } else {
    localStorage.setItem("theme", "light-theme");
    localStorage.setItem("slider", "slider");
    localStorage.setItem("checkbox", "checkbox");
  }
  body.className = localStorage.getItem("theme");
}

function change() {
  slider.classList.toggle("slideractive");
  checkbox.classList.toggle("checkbox-active");
  mobCheckbox.classList.toggle("checkbox-active");
  mobSlider.classList.toggle("slideractive");
}
