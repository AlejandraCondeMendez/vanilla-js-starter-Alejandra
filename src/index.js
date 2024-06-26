
// Inserte el código aquí
let inputTarea = document.getElementById("inputTarea")
let btnAgregar = document.getElementById("btnAgregar")
let contTareas = document.getElementById("cont-tareas")
let completadas = document.getElementById("tareasCompletadas")
//primero creamos un método POST para guardar la lista de tareas en la API

import { insertarDatos } from "./post"
import Swal from 'sweetalert2'


// inputTarea.addEventListener("keydown",(e)=>{ //es el evento de tocar la tecla
//     if(e.key=="Enter" && !validacionInput()){ //si la tecla es enter se ejecuta la función InsertarDatos
//         insertarDatos()
//     }
// })
inputTarea.addEventListener("keydown", async (e) => { //es el evento de tocar la tecla
    if (e.key == "Enter") { //si la tecla es enter
        if (inputTarea.value.trim("") === "") { // si el input está vacío
            await validacionInput() // ejecutar validación ALERTA
        } else { 
            await insertarDatos() // de lo contrario, insertar datos
        }
    }
});


const Toast = Swal.mixin({
    toast: true,
    position: 'center',
    iconColor: 'white',
    customClass: {
      popup: 'colored-toast',
    },
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
  })
//creamos el método GET para llamar a la lista de tareas de la API

import { extraerDatos } from "./get"

//creamos una función para mostrar los datos en el HTML -- MÉTODO GET

import { mostrar } from "./mostrarHTML"

btnAgregar.addEventListener("click", async() => {
    if ( await validacionInput()) { //la funcion validarInput toma como condición el contenido del input, si esta vacía muestra la alerta
    //si hay algo escrito agrega la tarea (insertarDatos)
    } else {
        insertarDatos()
       
    }
})

//función PUT para actualizar datos 
/*primero hacemos el método get (traer los datos de la tarea que queremos actualizar) y luego el put  */

import { actualizarDatos } from "./put"


//MÉTODO DELETE

import { borrarDatos } from "./delete"

mostrar()

async function validacionInput() {
    if (inputTarea.value.trim("") === "") { //método de la clase string
        await Toast.fire({
            title: 'OH NO, ¡ERROR!',
            text: 'INGRESE UN TEXTO',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
          return true 
        // alert("INGRESE UN TEXTO") 
    }
    return false
} 

/*async function validarContenedor() {
   if (contTareas === "") {
    contTareas = "No hay tarea"
   } else {
    await mostrar()
   }
        
}
validarContenedor()*/


