const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn__burger");
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item')
let showMenu = false;

menuBtn.addEventListener("click", toggelBtn);

function toggelBtn() {
  if (!showMenu) {
    hamburger.classList.add("open");
    showMenu=true;
    nav.classList.add('open')
    menuNav.classList.add('open')
    navItems.forEach((item)=>item.classList.add('open'))

  } else {
    hamburger.classList.remove("open");
    showMenu=false;
    nav.classList.remove('open')
    menuNav.classList.remove('open')
    navItems.forEach((item)=>item.classList.remove('open'))

  }
}
