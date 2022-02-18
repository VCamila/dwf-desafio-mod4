function componenteHeader(element){
    const newComponenteHeader = document.createElement("div");
    newComponenteHeader.querySelector(".header__cont");
    
    newComponenteHeader.innerHTML = 
    `
    <header class="header">
      <nav class="header__nav">
        <a href="#" class="header__nav-logo">
          <img src="./img/logo.png" class="header__img-logo" alt=""/>
        </a>
        <button class="header__open-menu" aria-label="Abrir menú">
          <img src="./img/menus.png" class="header__open" alt="abrir-menu"/>
        </button>
      <ul class="header__menu">
        <button class="header__close-menu" aria-label="Cerrar menú">
          <img src="./img/Vector.png" class="header__close" alt="cerrar-menu"/>
        </button>
       <li><a href="./portfolio.html"> portfolio</a></li>
       <li><a href="./servicios.html"> servicios</a></li>
       <li><a href="./contacto.html"> contacto</a></li>
      </ul>
    </nav>
    </header>
    `
    
    const menuEl = newComponenteHeader.querySelector(".header__menu");
    const openMenuEl = newComponenteHeader.querySelector(".header__open-menu");
    const closeMenuEl = newComponenteHeader.querySelector(".header__close-menu");
    
    function toggleMenu(){
        menuEl.classList.toggle("header__menu-opened");
    }
    
    openMenuEl.addEventListener("click", toggleMenu);
    closeMenuEl.addEventListener("click", toggleMenu);
    
    
    element.appendChild(newComponenteHeader);
    
}