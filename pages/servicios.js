function addComponentes(){
    const headerEl = document.querySelector(".header__cont");
    componenteHeader(headerEl);
    
    const serviciosEl = document.querySelector(".subcontenedor-sec-tres");
    componenteServicios(serviciosEl);
    
    const footerEl = document.querySelector(".footer__cont");
    componenteFooter(footerEl);
}
    
addComponentes();

function addServicesCards(params = {}){
    const template = document.querySelector("#template-servicios");
    const container = document.querySelector(".subcontenedor-sec-tres");
    
    template.content.querySelector(".title-serv-tecnico").textContent = params.title;
    template.content.querySelector(".parrafo-serv-tec").textContent = params.parrafo;
    template.content.querySelector(".imagen-serv").src = params.imagen;
    
    const clone = document.importNode(template.content, true);
    container.appendChild(clone);
}

function getServices(){
    return fetch("https://cdn.contentful.com/spaces/608skld5heua/environments/master/entries?access_token=jup_Z4xJF3rs5pCsy7UEVhyQBsnVJPC2sMknWMZ5STY&&content_type=services").then((response) => {
        return response.json();
    }).then((data) => {
        const fieldsCollections = data.items.map((item) => {
        const imagenId = item.fields.preview.sys.id;
        const image = imagenData(imagenId, data);
        const imagenLink = image.fields.file.url; 

          return {
              title: item.fields.nombre,
              parrafo: item.fields.texto,
              imagen: imagenLink,
          }
        });
        return fieldsCollections;
    });
}
    
function imagenData(id, data){
   const imagen =  data.includes.Asset.find((asset) => {
       return asset.sys.id = id;
    });
    return imagen;
}
    
function main(){
getServices().then(function(services) {
for(const s of services){
        addServicesCards(s);
    }
});
}
    
main();
