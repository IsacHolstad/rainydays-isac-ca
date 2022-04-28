const myAPI = "https://rainydaysjackets.flywheelsites.com/wp-json/wc/store/products/";
const proxy = "https://noroffcors.herokuapp.com/";
const corsFixUrl = proxy + myAPI;
//console.log(myAPI)
const jacketPng = document.querySelector(".jacketpng");
const jacketData = document.querySelector(".container")
const img = document.querySelector(".jacket-img")

//console.log(window.location)

async function showJackets() {
    try{
        const response = await fetch(corsFixUrl);
        //console.log(response);
        const responseJSON = await response.json();
        //console.log(responseJSON);
        const jacketInfo = responseJSON.data;
        //console.log(responseJSON.data)
        for (let i = 0; i < responseJSON.length; i++) {
            //console.log(responseJSON[i]);

           
            jacketData.innerHTML += `<img src="${responseJSON[i].images}"></img>
            <li><a href="detaild-jckt.html?id=${responseJSON[i].name}"></li>
            <li>${responseJSON[i].price_html}</li>`

            
            
            
        }
            
        
        

    }
    catch(error) {
        jacketData.innerHTML = `<h1>404</h1>`
       
    }
}
showJackets();

//console.log(myAPI)



