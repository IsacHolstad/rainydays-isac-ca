const myAPI = "https://rainydaysjackets.flywheelsites.com/wp-json/wc/store/products/"
const proxy = "https://noroffcors.herokuapp.com/";
const corsFixUrl = proxy + myAPI;
//console.log(myAPI)
const ulList = document.querySelector(".ul-list");
const jacketImage = document.querySelector(".container")
const img = document.querySelector(".jacket-img")

async function jackets() {
    try{
        const response = await fetch(myAPI);
        console.log(response);
        const responseJSON = await response.json();
        console.log(responseJSON);
        const jacketData = responseJSON.data;
        //console.log(responseJSON.data)
        for (let i = 0; i < responseJSON.length; i++) {
            console.log(responseJSON[i].name);

           
            jacketImage.innerHTML += `<img src="${responseJSON[i].images.src}"/>
            <li><a href="detaild-jckt.html?id=${responseJSON[i].name}">/></li><li>${responseJSON[i].price_html}</li>
            
            `

        }
        
        

    }
    catch(error) {
        ulList.innerHTML = `<h1>sorry, there seem to be and error</h1>`
    }
}
jackets();



