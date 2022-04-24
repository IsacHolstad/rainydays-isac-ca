const myAPI = "https://rainydaysjackets.flywheelsites.com/wp-json/wc/store/products"
const proxy = "https://noroffcors.herokuapp.com/";
const corsFixUrl = proxy + myAPI;
//console.log(myAPI)
const divContainer = document.querySelector(".container");

async function jackets() {
    try{
        const response = await fetch(myAPI);
        console.log(response);
        const responseJSON = await response.json();
        console.log(responseJSON);
        const jacketData = responseJSON.results;
        console.log(jacketData)
        for (let i = 0; i < jacketData.length; i++) {
            console.log(jacketData[i]);

            divContainer.innerHTML += `<li><span>${jacketData[i].name}</span></li>`;

        }
        

    }
    catch(error) {
        console.log("error")
    }
}
jackets();



