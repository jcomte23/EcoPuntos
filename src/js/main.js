import '../scss/style.scss'
import * as bootstrap from 'bootstrap'

//Selectores
const piso=document.getElementById("select_floor")
const canecas =document.querySelectorAll(".bowl")

canecas.forEach(element => {
    element.addEventListener("click",function (e) {
        document.getElementById("btnOpenModal").click()
        console.log("le diste click a una caneca",element.getAttribute("type-bowl"));
    })
});