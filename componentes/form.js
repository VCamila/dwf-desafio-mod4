function componenteForm(element){
const newComponenteForm = document.createElement("div");
newComponenteForm.querySelector(".form__cont");
    
newComponenteForm.innerHTML = 
 `
    <section class="form__section">
      <div class="form__cont">   
      <h1 class="form__title"> ESCRIBIME </h1>
         </div>
         <form class="form__contact">
            <label for="">
                <h3 class="form__label"> NOMBRE</h3>
                <input type="type" class="form__input"/>
            </label>  
          <label for="">
              <h3 class="form__label"> EMAIL</h3>
              <input type="text" class="form__input"/>
          </label>
          <label for="">
              <h3 class="form__label"> Mensaje</h3>
              <textarea class="form__input-textarea"></textarea>
          </label>
          <div class="form__submit-cont">
              <button class="form__submit-button"> Enviar</button>
          </div>
          </form>
      </div>
    </section>
`
    
element.appendChild(newComponenteForm);
formEvent();
}

function formEvent(){
const newComponenteForm = document.querySelector(".form__cont");
newComponenteForm.addEventListener("submit", function(event) {
   event.preventDefault();

   const data = new FormData(event.target);
   const object = Object.fromEntries(data.entries());
   //console.log(object);

  const mensaje = `
    user: ${object.name}
    email: ${object.email}
    mensaje: ${object.message}
  `;

  fetch("https://apx-api.vercel.app/api/utils/dwf", {
      method: "POST",

      headers: {"content-type": "application/json"},
      body: JSON.stringify({
          to: "camilavazquezvazquez2014@outlook.com",
          message: mensaje,
      })
  })
.then(()=> {
    console.log("soy el mensaje")
    alert("Mensaje enviado");
})
.catch(() => {
  alert("Ha ocurrido un error");
});
});
}