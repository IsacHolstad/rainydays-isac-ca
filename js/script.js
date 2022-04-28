const myAPI = "https://rainydaysjackets.flywheelsites.com/wp-json/wc/store/products"
const proxy = "https://noroffcors.herokuapp.com/";
const corsFixUrl = proxy + myAPI;
//console.log(myAPI)
const ulList = document.querySelector(".ul-list");
const jacketData = document.querySelector(".container")
const img = document.querySelector(".jacket-img")

async function showJackets() {
    try{
        const response = await fetch(corsFixUrl);
        console.log(response);
        const responseJSON = await response.json();
        console.log(responseJSON);
        const jacketInfo = responseJSON.data;
        //console.log(responseJSON.data)
        for (let i = 0; i < responseJSON.length; i++) {
            console.log(responseJSON[i]);

           
            jacketData.innerHTML += `<img src="${responseJSON[i].id.src}"></img>
            <li><a href="detaild-jckt.html?id=${responseJSON[i].short_description}"></li>
            <li>${responseJSON[i].price_html}</li>`
            
        }
            
        
        

    }
    catch(error) {
        console.log("error")
    }
}
showJackets();

console.log(myAPI)


