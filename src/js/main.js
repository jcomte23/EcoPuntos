import '../scss/style.scss'

//Selectores
const piso=document.getElementById("select_floor")
const canecas =document.querySelectorAll(".bowl")

canecas.forEach(element => {
    element.addEventListener("click",function (e) {
        console.log("le diste click a una caneca");
    })
});