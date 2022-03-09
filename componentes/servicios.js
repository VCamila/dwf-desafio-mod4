function componenteServicios(element){
const newComponenteServicios = document.createElement("div");
newComponenteServicios.querySelector(".section-three");


newComponenteServicios.innerHTML = 
`
  <template id="template-servicios">
      <div class="container-service">
        <div class="img-sec-tres">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO3h6_HUbyKS5DBNh-Z6DPwJnYTqJRnxP2w_extzE9jjUibs4tDYfgFK97isES5HwqTtQ&usqp=CAU" alt="" class="imagen">
          </div>
              <h3 class="title-serv-tecnico"> </h3>
                  <p class="parrafo-serv-tec"> </p>
    </div>
</template>
`

element.appendChild(newComponenteServicios);

}

