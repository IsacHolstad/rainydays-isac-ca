const ApiUrl = 'https://rainydaysjackets.flywheelsites.com/wp-json/wc/store/products/?catagory=${id}'
console.log(ApiUrl)
const proxy = "https://noroffcors.herokuapp.com/";
const corsFixUrl = proxy + ApiUrl;

const jacketData = document.querySelector(".jacket");

async function jcktInfo() {
    try{
        const response = await fetch(corsFixUrl);
        console.log(response);
        const responseJSON = await response.json();
        console.log(responseJSON);
        const jacketData = responseJSON.data;
        console.log(responseJSON);
        for (let i = 0; i < responseJSON.length; i++) {
            console.log(responseJSON[i]);

            jacketData.innerHTML += `<img src=${responseJSON[i].images.src}">`;
        }
        
    }
    catch(e){
        console.log("error")
    }
}
jcktInfo()
