function componentePortfolio(element){
const newComponentePortfolio = document.createElement("div");
newComponentePortfolio.querySelector(".section-portfolio");


newComponentePortfolio.innerHTML = 
`
<h1 class="title-port"> Portfolio</h1>
<template id="portfolio-template">
<div class="portfolio-content"> 
<div class="port-cards"> 
<img src="https://escucharahoraysiempre.com/wp-content/uploads/2019/03/implante-coclear1.png" class="portfolio-imagen" alt=""/>     
   <h4 class="portfolio-title"> Oír es un derecho</h4>
    <p class="portfolio-text"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto temporibus voluptatum reprehenderit, nisi numquam ab. Incidunt mollitia aut nam perferendis rem doloremque asperiores dolor, architecto accusamus, commodi consequatur eligendi voluptate?</p>
    <a href="https://apx.school/" class="portfolio-link"> Ver más</a>
    </div>
  </div>
</template>
`

element.appendChild(newComponentePortfolio);

}