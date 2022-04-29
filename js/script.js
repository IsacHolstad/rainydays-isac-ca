const myAPI = 'https://rainydaysjackets.flywheelsites.com/wp-json/wc/store/products';
//const proxy = "https://noroffcors.herokuapp.com/";
//const corsFixUrl = proxy + myAPI;
//console.log(myAPI)
const jacketPng = document.querySelector(".jacketpng");
const jacketData = document.querySelector(".container")


//console.log(window.location)

async function showJackets() {
    try{
        const response = await fetch(myAPI);
        //console.log(response);
        const responseJSON = await response.json();
        //console.log(responseJSON);
        const jacketInfo = responseJSON.data;
        //console.log(responseJSON.data)
        for (let i = 0; i < responseJSON.length; i++) {
        console.log(responseJSON[i].images);

           
            jacketData.innerHTML += `<img  width="324" height="324" src="${responseJSON[i].images.src}">`;

            

            
            
            
        }
            
        
        

    }
    catch(error) {
        jacketData.innerHTML = `<h1>404</h1>`
       
    }
}
showJackets();

console.log(myAPI)




