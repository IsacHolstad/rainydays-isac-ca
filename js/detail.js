const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id')



const ApiUrl = 'https://rainydaysjackets.flywheelsites.com/wp-json/wc/store/products/11'
console.log(ApiUrl)
//const proxy = "https://noroffcors.herokuapp.com/";
//const corsFixUrl = proxy + ApiUrl;

const jcktDataInfo = document.querySelector(".jacket");

async function jcktInfo() {
    try{
        const response = await fetch(ApiUrl);
        //console.log(response);
        const responseJSON = await response.json();
        //console.log(responseJSON);
        const jacketData = responseJSON.data;
        console.log(responseJSON);
        for (let i = 0; i < responseJSON.length; i++) {
            console.log(responseJSON[i]);

            jcktDataInfo.innerHTML += `<img src="${responseJSON[i].images}"></li>`;
        }
        
    }
    catch(e){
        console.log("error")
    }
}
jcktInfo()
