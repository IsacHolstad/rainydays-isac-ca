const myAPI = "https://rainydaysjackets.flywheelsites.com/"
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


