const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id')



const ApiUrl = `https://rainydaysjackets.flywheelsites.com/wp-json/wc/store/products?category=11`
console.log(ApiUrl)
const proxy = "https://noroffcors.herokuapp.com/";
const corsFixUrl = proxy + ApiUrl;

const jcktDataInfo = document.querySelector(".jacket");

async function getJacket() {
    try{
        const response = await fetch(corsFixUrl);
        console.log(response);
        const jacketData = await response.json();
        //console.log(jacketData);
        jcktDataInfo.innerHTML = `<li>${jacketData.id}</li>`

    }
    catch(error){
        console.log("error")
    }
}
getJacket()
