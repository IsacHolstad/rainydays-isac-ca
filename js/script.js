const myAPI = "https://rainydaysjackets.flywheelsites.com/wp-json/wc/store/products";
const proxy = "https://noroffcors.herokuapp.com/";
const corsFixUrl = proxy + myAPI;
//console.log(myAPI)
const jacketPng = document.querySelector(".jacketpng");
const jacketData = document.querySelector(".container")
console.log(window.location)


//console.log(window.location)

async function showJackets() {
    try{
        const response = await fetch(corsFixUrl);
        //console.log(response);
        const responseJSON = await response.json();
        //console.log(responseJSON);
        const jacketInfo = responseJSON.results;
        //console.log(responseJSON)
        for (let i = 0; i < responseJSON.length; i++) {
        console.log(responseJSON[i].id);
        //console.log(responseJSON[i].name)

           
            jacketData.innerHTML += `<li class="list-details">
            <a href="detaild-jckt.html?id=${responseJSON[i].id}">${responseJSON[i].price_html} ${responseJSON[i].name}</li>`
            

            
        }

    }
    catch(error) {
        jacketData.innerHTML = `<h1>404</h1>`
       
    }
}
showJackets();

//console.log(myAPI)




