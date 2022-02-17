function componenteForm(element){
    const newComponenteForm = document.createElement("div");
    newComponenteForm.querySelector(".form__cont");
    
    newComponenteForm.innerHTML = 
    `
    <section class="form__section">
      <div class="form__cont">   
      <h1 class="form__title"> Escribime </h1>
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
}