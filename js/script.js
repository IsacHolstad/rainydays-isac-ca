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
           
        }
        divContainer.innerHTML += `<li>${jcktData[i].name}</li>`
    }
    catch(error){
        console.log("error")
    }
}
jackets()


