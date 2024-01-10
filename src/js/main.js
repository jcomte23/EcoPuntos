import '../scss/style.scss'
import * as bootstrap from 'bootstrap'

//Bodega local
let data=[
    {
        piso:"3",
        aprovechables:0,
        organicos:0,
        no_aprovechables:0
    },
    {
        piso:"4",
        aprovechables:0,
        organicos:0,
        no_aprovechables:0
    },
    {
        piso:"5",
        aprovechables:0,
        organicos:0,
        no_aprovechables:0
    }
]




//Selectores
const piso=document.getElementById("select_floor")
const canecas =document.querySelectorAll(".bowl")

canecas.forEach(element => {
    element.addEventListener("click",function (e) {
        document.getElementById("btnOpenModal").click()
        console.log("le diste click a una caneca",element.getAttribute("type-bowl"));
    })
});