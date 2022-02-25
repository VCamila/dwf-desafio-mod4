function addComponentes(){
const headerEl = document.querySelector(".header__cont");
componenteHeader(headerEl);
    
const portfolioEl = document.querySelector(".section-portfolio");
componentePortfolio(portfolioEl);
  

const footerEl = document.querySelector(".footer__cont");
componenteFooter(footerEl);
}
    
addComponentes();
    
function addPortfolioCards(params = {}){
const template = document.querySelector("#portfolio-template");
const container = document.querySelector(".section-portfolio");

template.content.querySelector(".portfolio-title").textContent = params.title;
template.content.querySelector(".portfolio-text").textContent = params.text;
template.content.querySelector(".portfolio-imagen").src= params.imagen;
template.content.querySelector(".portfolio-link").href= params.url;

const clone = document.importNode(template.content, true);
container.appendChild(clone);
}   

function getPortfolio(){
return fetch("https://cdn.contentful.com/spaces/608skld5heua/environments/master/entries?access_token=jup_Z4xJF3rs5pCsy7UEVhyQBsnVJPC2sMknWMZ5STY&&content_type=portfolio").then((response)=> {
    return response.json()
}).then((data) => {
    const fieldsCollections = data.items.map((item) => {
    const imagenId = item.fields.imagen.sys.id;
    const image = imagenData(imagenId, data);
    return {
        title: item.fields.titulo,
        text: item.fields.texto,
        url: item.fields.url,
        imagen: image.fields.file.url,
        }
    });
    return fieldsCollections;
});
}

function imagenData(id, json){
    return  json.includes.Asset.find((item) => {
        return item.sys.id == id;
     });
 }

function main(){
getPortfolio().then(function(portfolio) {
  //console.log(portfolio);
  for(const p of portfolio){
      addPortfolioCards(p);
  }
});
}

main();