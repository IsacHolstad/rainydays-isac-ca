const myAPI = "https://rainydaysjackets.flywheelsites.com/wp-json/wc/store/products";
const proxy = "https://noroffcors.herokuapp.com/";
const corsFixUrl = proxy + myAPI;
//console.log(myAPI)
const jacketPng = document.querySelector(".jacketpng");
const jacketData = document.querySelector(".container")
console.log(window.location)


async function showJackets() {
    try{
        const response = await fetch(corsFixUrl);
        const responseJSON = await response.json();
        const jacketInfo = responseJSON.results;
        for (let i = 0; i < responseJSON.length; i++) {
           
            jacketData.innerHTML += `<li class="list-details">
            <a href="detaild-jckt.html?id=${responseJSON[i].id}">${responseJSON[i].prices.price} 
            ${responseJSON[i].name}</li>
            <div>${responseJSON[i].description}</div`
            
        }
    }
    catch(error) {
        jacketData.innerHTML = `<h1>404</h1>`
    }
}
showJackets();