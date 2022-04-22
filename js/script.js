const myAPI = "rainydaysjackets.flywheelsites.com/wp-json/wc/store/products"
console.log(myAPI)
const divContainer = document.querySelector(".container");

async function jackets(){
    try{
        const response = await fetch(myAPI);
        console.log(response)
    }
    catch(error){
        console.log("error")
    }
}
jackets()


