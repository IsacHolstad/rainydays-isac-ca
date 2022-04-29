const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id')



const ApiUrl = `https://rainydaysjackets.flywheelsites.com/wp-json/wc/store/products/${id}`
console.log(ApiUrl)
const proxy = "https://noroffcors.herokuapp.com/";
const corsFixUrl = proxy + ApiUrl;

const jcktDataInfo = document.querySelector(".jacket-info");

async function getJacket() {
    try{
        const response = await fetch(corsFixUrl);
        console.log(response);
        const jacketData = await response.json();
        //console.log(jacketData);
        jcktDataInfo.innerHTML = `<li class="detaild-item">${jacketData.name} 
        ${jacketData.price_html}</li>
        <p class="ptag-description">${jacketData.short_description}</p>`

    }
    catch(error){
        console.log("error")
    }
}
getJacket()
