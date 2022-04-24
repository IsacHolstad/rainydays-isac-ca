const myAPI = "http://rainydaysjackets.flywheelsites.com/wp-json/wc/store/products"
//console.log(myAPI)
const divContainer = document.querySelector(".container");

async function jackets(){
    try{
        const response = await fetch(myAPI);
        //console.log(response)
        const responseJSON = await response.json()
        const jcktData = responseJSON.data;
        for (let i = 0; i < jcktData.length; i++) {
            console.log(jcktData[i].name)
                divContainer.innerHTML += `<h1>${jcktData[i].name}</h1>`
           
        }
        
    }
    catch(error){
        //console.log("error")
        divContainer.innerHTML += `<h1>there is an error happening😓</h1>`
    }
}
jackets();


