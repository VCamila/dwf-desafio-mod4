function componenteServicios(element){
const newComponenteServicios = document.createElement("div");
newComponenteServicios.querySelector(".subcontenedor-sec-tres");


newComponenteServicios.innerHTML = 
`
  <template id="template-servicios">
      <div>
        <div class="img-sec-tres"><img src="./img/servicio.png" alt="" class="imagen-serv"></div>
              <h3 class="title-serv-tecnico"> </h3>
                  <p class="parrafo-serv-tec"> </p>
    </div>
</template>
`

element.appendChild(newComponenteServicios);

}

