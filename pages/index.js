const menuEl = document.querySelector(".header__menu");
const openMenuEl = document.querySelector(".header__open-menu");
const closeMenuEl = document.querySelector(".header__close-menu");
const logoToggle = document.querySelector("#header-toggle");


function toggleMenu(){
    menuEl.classList.toggle("header__menu-opened");
}

logoToggle.addEventListener("click", ()=> {
   menuEl.classList.toggle(".nav-menu_visible");
});

openMenuEl.addEventListener("click", toggleMenu);
closeMenuEl.addEventListener("click", toggleMenu);

function main(){
getServices().then(function(services) {
for(const s of services){
        addServicesCards(s);
    }
});
const serviciosEl = document.querySelector(".section-three");
componenteServicios(serviciosEl);

const formEl = document.querySelector(".form__section");
componenteForm(formEl);



}

main();
