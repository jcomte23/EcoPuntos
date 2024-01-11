import '../scss/style.scss'
import * as bootstrap from 'bootstrap'

//Bodega local
let caneca
let data = [
    {
        piso: "3",
        aprovechables: 0,
        organicos: 0,
        no_aprovechables: 0
    },
    {
        piso: "4",
        aprovechables: 0,
        organicos: 0,
        no_aprovechables: 0
    },
    {
        piso: "5",
        aprovechables: 0,
        organicos: 0,
        no_aprovechables: 0
    }
]




//Selectores
const piso = document.getElementById("select_floor")
const canecas = document.querySelectorAll(".bowl")
const btnSubmit = document.getElementById("btnSubmit")

document.addEventListener("DOMContentLoaded", function (params) {
    pintarPuntoEcologico(piso.value)
})

piso.addEventListener("input", function (e) {
    pintarPuntoEcologico(e.target.value)
})

btnSubmit.addEventListener("click", function (e) {
    const cantidad = document.getElementById("cantidad")
    agregarDatos(piso.value, Number(cantidad.value), caneca)
})

canecas.forEach(element => {
    element.addEventListener("click", function (e) {
        document.getElementById("btnOpenModal").click()
        caneca = element.getAttribute("type-bowl")
    })
})

function agregarDatos(piso, cantidad, tipoCaneca) {
    data.forEach(element => {
        if (element.piso === piso && (cantidad>0 || cantidad <= 500)) {
            element[tipoCaneca] += cantidad
            document.getElementById("btnCloseModal").click()
            document.getElementById("cantidad").value=""
        }
    })
    pintarPuntoEcologico(piso)
}

function pintarPuntoEcologico(piso) {
    data.forEach(element => {
        if (element.piso === piso) {
            document.querySelector("#aprovechables .body_top span").textContent = `${element.aprovechables}/500`
            document.querySelector("#organicos .body_top span").textContent = `${element.organicos}/500`
            document.querySelector("#no_aprovechables .body_top span").textContent = `${element.no_aprovechables}/500`
            let total=(element.aprovechables+element.organicos+element.no_aprovechables)
            let porcentaje=((total*100)/1500)
            if (porcentaje<25) {
                document.body.style.background="red"
            }else if (porcentaje>=25 && porcentaje<50) {
                document.body.style.background="orange"
            }else{
                document.body.style.background="green"
            }
        }
    });
}
