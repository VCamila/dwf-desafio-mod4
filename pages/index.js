const menuEl = document.querySelector(".header__menu");
const openMenuEl = document.querySelector(".header__open-menu");
const closeMenuEl = document.querySelector(".header__close-menu");

function toggleMenu(){
    menuEl.classList.toggle("header__menu-opened");
}

openMenuEl.addEventListener("click", toggleMenu);
closeMenuEl.addEventListener("click", toggleMenu);

function main(){
    /*componenteHeader(document.querySelector(".header__cont"));
    componenteFooter(document.querySelector(".footer__cont"));*/
    /*componenteForm(document.querySelector(".form__cont"));*/
getServices().then(function(services) {
for(const s of services){
        addServicesCards(s);
    }
});
const serviciosEl = document.querySelector(".section-three");
componenteServicios(serviciosEl);

}

main();

