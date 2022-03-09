function addComponentes(){
    const headerEl = document.querySelector(".header__cont");
    componenteHeader(headerEl);
    
    const footerEl = document.querySelector(".footer__cont");
    componenteFooter(footerEl);

    const formEl = document.querySelector(".form__cont");
    componenteForm(formEl);
    formEvent();
}

addComponentes();

/*function formEvent(){
    const newComponenteForm = document.querySelector(".form__cont");
    newComponenteForm.addEventListener("submit", function(event) {
       event.preventDefault();
    
       const data = new FormData(event.target);
       const object = Object.fromEntries(data.entries());
    
       const mensaje = `
       user: ${object.name}
       email : ${object.email}
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
    .then(() => {
      console.log("Soy el mensaje");
      alert("Mensaje enviado");
    })
    .catch(() => {
      alert("Ha ocurrido un error");
    });
    });
}

formEvent();*/