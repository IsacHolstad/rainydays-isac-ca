const myAPI = 'http://rainydaysjackets.flywheelsites.com/wp-json/wc/store/products'
const proxy = "https://noroffcors.herokuapp.com/";
const corsFixUrl = proxy + myAPI;
//console.log(myAPI)
const divContainer = document.querySelector(".container");

async function jackets(){
    try{
        const response = await fetch(corsFixUrl);
        //console.log(response)
        const responseJSON = await response.json()
        console.log(responseJSON)
        const jcktData = responseJSON.results;
        console.log(jcktData)
        for (let i = 0; i < jcktData.length; i++) {
            console.log(jcktData[i].id)
                divContainer.innerHTML = `<li>${jcktData[i].id}</li>`
           
        }
        
    }
    catch(error){
        //console.log("error")
        divContainer.innerHTML += `<h1>there is an error happening😓</h1>`
    }
}
jackets();


