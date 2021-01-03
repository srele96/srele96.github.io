var smallScreenMenuBtn = document.querySelector('.small-screen-btn');
var isActive = false;

var navMenu = document.querySelector('.nav-menu');
var body = document.getElementsByTagName('body')[0];

var isActiveIcon = '<i class="fa fa-times" aria-hidden="true"></i>';
var isNotActiveIcon = '<i class="fa fa-bars" aria-hidden="true"></i>';

function toggleMenu() {
  isActive = !isActive;
  if(isActive) {
    smallScreenMenuBtn.innerHTML = isActiveIcon;
  }
  else {
    smallScreenMenuBtn.innerHTML = isNotActiveIcon;
  }

  navMenu.classList.toggle('menu-visible');
  body.classList.toggle('disable-scroll');
}

function closeMenu() {
  isActive = false;
  navMenu.classList.remove('menu-visible');
  body.classList.remove('disable-scroll');
}

window.addEventListener('click', handleClickOutsideMenu);

function handleClickOutsideMenu(e) {
  console.log(e.target);
  if(e.target === smallScreenMenuBtn ||
  e.target === smallScreenMenuBtn.children[0]) {
    toggleMenu();
  }
  else if(e.target) {
    closeMenu();
  }
}

// ----------------------------------------------------------------------------

var toggleCustomScrollWindowBtn = document.querySelector(
  '#toggle-custom-scroll-window'
);
var customScrollWindowWrapper = document.querySelector('.window-wrapper');

toggleCustomScrollWindowBtn.addEventListener('click', toggleCustomScrollWindow);

function toggleCustomScrollWindow() {
  // class located in custom_scrollbar.css
  customScrollWindowWrapper.classList.toggle('toggle-scroll-window')
}

