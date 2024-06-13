import { extraerApi } from "./fetch"
//inciar sesión
const btnIniciar = document.getElementById("btnIniciar")
const registrarCuenta = document.getElementById("resgistrarCuenta")

    btnIniciar.addEventListener("click",async()=>{
        const seionCorreo = document.getElementById("sesionCorreo").value
        const sesionContra = document.getElementById("sesionContra").value
        let bandera = false //empieza en false
        let guardadoDatos = await extraerApi()
        guardadoDatos.forEach(usuario=>{
            if (seionCorreo == usuario.email && sesionContra == usuario.password) { //valida el inicio de sesión con el registro
                alert("EL CORREO TA BIEN")
                bandera = true //una ves validado muestra la alerta y se detiene
            }
            if(!bandera){
                alert("EL CORREO NO TA BIEN")
                bandera = true
            }
        })
    })


    registrarCuenta.addEventListener("click",()=>{
        window.location.href="registro.html"
    })