const myAPI = "https://rainydaysjackets.flywheelsites.com/wp-json/wc/store/products/"
const proxy = "https://noroffcors.herokuapp.com/";
const corsFixUrl = proxy + myAPI;
//console.log(myAPI)
const ulList = document.querySelector(".ul-list");
const jacketImage = document.querySelector(".container")

async function jackets() {
    try{
        const response = await fetch(myAPI);
        console.log(response);
        const responseJSON = await response.json();
        console.log(responseJSON);
        const jacketData = responseJSON.data;
        //console.log(jacketData)
        for (let i = 0; i < responseJSON.length; i++) {
            console.log(responseJSON[i].name);

            ulList.innerHTML += `<h1>${responseJSON[i].name}</h1>`;

        }
        

    }
    catch(error) {
        console.log("error")
    }
}
jackets();



