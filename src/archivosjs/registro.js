import { dataApi } from "./fetch"

//registro
const inputEmail = document.getElementById("email")
const inputPassword = document.getElementById("password")
const btnIngresar = document.getElementById("btnIngresar")

btnIngresar.addEventListener("click",async()=>{
    await dataApi(inputEmail.value,inputPassword.value)
})


const btnIniciarSesion = document.getElementById("btnIniciarSesion")


btnIniciarSesion.addEventListener("click",()=>{
    window.location.href="inicio.html"
})


