const menuEl = document.querySelector(".header__menu");
const openMenuEl = document.querySelector(".header__open-menu");
const closeMenuEl = document.querySelector(".header__close-menu");

function toggleMenu(){
    menuEl.classList.toggle("header__menu-opened");
}

openMenuEl.addEventListener("click", toggleMenu);
closeMenuEl.addEventListener("click", toggleMenu);