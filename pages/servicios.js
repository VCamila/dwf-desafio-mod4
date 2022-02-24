function addComponentes(){
    const headerEl = document.querySelector(".header__cont");
    componenteHeader(headerEl);
    
    const serviciosEl = document.querySelector(".section-three");
    componenteServicios(serviciosEl);
    
    const footerEl = document.querySelector(".footer__cont");
    componenteFooter(footerEl);
}
    
addComponentes();

function addServicesCards(params = {}){
    const template = document.querySelector("#template-servicios");
    const container = document.querySelector(".section-three");
    
    template.content.querySelector(".title-serv-tecnico").textContent = params.title;
    template.content.querySelector(".parrafo-serv-tec").textContent = params.parrafo;
    template.content.querySelector(".imagen").src = params.imagen;
    
    const clone = document.importNode(template.content, true);
    container.appendChild(clone);
}

function getServices(){
    return fetch("https://cdn.contentful.com/spaces/608skld5heua/environments/master/entries?access_token=jup_Z4xJF3rs5pCsy7UEVhyQBsnVJPC2sMknWMZ5STY&&content_type=services").then((response) => {
        return response.json();
    }).then((data) => {
        const fieldsCollections = data.items.map((item) => {
        const imagenId = item.fields.imagen.sys.id;
        const image = imagenData(imagenId, data);

          return {
              title: item.fields.nombre,
              parrafo: item.fields.texto,
              imagen: image.fields.file.url,
          }
        });
        return fieldsCollections;
    });
}
    
function imagenData(id, json){
   return  json.includes.Asset.find((item) => {
       return item.sys.id = id;
    });
}
    
function main(){
getServices().then(function(services) {
for(const s of services){
        addServicesCards(s);
    }
});
}
    
main();
