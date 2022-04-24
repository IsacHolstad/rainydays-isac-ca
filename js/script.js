const myAPI = 'https://rainydaysjackets.flywheelsites.com/wp-json/wc/store/products?id=21'
const proxy = "https://noroffcors.herokuapp.com/";
const corsFixUrl = proxy + myAPI;
//console.log(myAPI)
const divContainer = document.querySelector(".container");

async function jackets(){
    try{
        const response = await fetch(corsFixUrl);
        console.log(response)
        const jsonData = await response.json()
        console.log(jsonData)
        const results = jsonData.data;
        console.log(results)
        for (let i = 0; i < jcktData.length; i++){
            console.log(results[i].name)
                divContainer.innerHTML += `<li>${results[i]}</li>`;
           
        }
        
    }
    catch(error){
        //console.log("error")
        divContainer.innerHTML += `<h1>there is an error happening😓</h1>`
    }
}
jackets();



