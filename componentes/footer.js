function componenteFooter(element){
    const newComponenteFooter = document.createElement("div");
    newComponenteFooter.querySelector(".footer__cont");
    
    newComponenteFooter.innerHTML = 
    `
    <footer class="footer">
      <img src="./pages/Imagenes/logo .png" alt="logo" class="footer__imagen-logo">
      <div class="footer__cont-redes">
          <p class="footer__title"> Instagram</p>
          <img class="footer__imagen-instagram" src="./pages/Imagenes/instagram.svg" alt="instagram"> 
          <p class="footer__title"> Linkedin</p>
          <img class="footer__imagen-linkedin" src="./pages/Imagenes/linkedin.svg" alt="linkedin">
          <p class="footer__title"> Github</p>
          <img class="footer__imagen-github" src="./pages/Imagenes/github.svg" alt="github">
      </div>
    </footer>
    `
    
    element.appendChild(newComponenteFooter);
    
}