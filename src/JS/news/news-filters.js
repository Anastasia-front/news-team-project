const buttonsContainer = document.querySelector('[data-filter-btn-container]');
const submenu = document.querySelectorAll('#list');
const links = document.querySelectorAll('.submenu-link span');
const linkButtons = document.querySelectorAll('.submenu-link');
const arrows = document.querySelectorAll('.categories__button-arrow');
const body = document.querySelector('body');
buttonsContainer.addEventListener('click', choiceFilter);
linkButtons.forEach(btn => {
  btn.addEventListener('click', changeClass);
});

let buttonSelected = '';

function choiceFilter(e) {
  if (e.target.nodeName !== 'BUTTON' || e.target.name === '') {
    return;
  }

  e.target.classList.add('active-filter');

  buttonSelected?.classList?.remove('active-filter');

  buttonSelected = e.target;

  const mqM = window.matchMedia('(max-width: 767px)');
  if (mqM.matches) {
    submenu[0].classList.add('hidden');
    links[0].innerHTML = buttonSelected.innerHTML;
    arrows[0].classList.remove('turn');
    if (body.classList.contains('dark-theme')) {
      arrows[0].style.fill = ' var(--light-text-color)';
    } else {
      arrows[0].style.fill = ' var(--accent-color)';
    }
  }
  const mqT = window.matchMedia('(max-width: 1279px)');
  if (mqT.matches) {
    submenu[1].classList.add('hidden');
    if (buttonSelected.parentNode.parentNode.classList.contains('submenu')) {
      links[1].innerHTML = 'Others / ' + buttonSelected.innerHTML;
      arrows[1].classList.remove('turn');
      if (body.classList.contains('dark-theme')) {
        arrows[1].style.fill = ' var(--light-text-color)';
      } else {
        arrows[1].style.fill = ' var(--accent-color)';
      }
      arrows[1].style.top = '15px';
      linkButtons[1].style.marginTop = '-10px';
    } else {
      arrows[1].style.top = '9px';
      linkButtons[1].style.marginTop = '0px';
      links[1].innerHTML = 'Others';
    }
  }
  const mqD = window.matchMedia('(min-width: 1280px)');
  if (mqD.matches) {
    submenu[2].classList.add('hidden');
    if (buttonSelected.parentNode.parentNode.classList.contains('submenu')) {
      links[2].innerHTML = 'Others / ' + buttonSelected.innerHTML;
      arrows[2].classList.remove('turn');
      if (body.classList.contains('dark-theme')) {
        arrows[2].style.fill = ' var(--light-text-color)';
      } else {
        arrows[2].style.fill = ' var(--accent-color)';
      }
    } else {
      links[2].innerHTML = 'Others';
    }
  }
}

function changeClass() {
  submenu.forEach(element => {
    element.classList.toggle('hidden');
    arrows.forEach(arrow => {
      arrow.classList.toggle('turn');
      arrow.style.marginTop = 0;
      if (body.classList.contains('dark-theme')) {
        arrow.style.fill = ' var(--light-text-color)';
      } else {
        arrow.style.fill = ' var(--accent-color)';
      }
    });
  });
}
