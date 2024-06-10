let contTareas = document.getElementById("cont-tareas")
let completadas = document.getElementById("tareasCompletadas")
import { extraerDatos } from "./get"
import { actualizarDatos } from "./put"
import { borrarDatos } from "./delete"

import "../src/todo.css"

import Swal from 'sweetalert2'


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

async function mostrar() {
contTareas.innerHTML=""
    inputTarea.value=""
    try {
        let arrayVacio = await extraerDatos()
        arrayVacio.forEach(iterar => { // Por cada tarea que traemos vamos a hacer etiquetas 
            const contenedor = document.createElement("div")
            const p = document.createElement("p")
            p.innerHTML = iterar.titulo //titulo se encuentra en el POST dentro del objeto listTarea
            //Iterar va a recorrer el arrayVacio (contiene etraerDatos) y va a buscar titulo.
            const checkbox = document.createElement("input")
            const boton = document.createElement("button")
            checkbox.type = "checkbox" //que el input sea de tipo checkbox
            p.appendChild(checkbox) //al lado del p va al checkbox
            contenedor.appendChild(p)
            checkbox.checked=iterar.estado //el estado de checked va a ser igual a iterar.estado 
            if (checkbox.checked) { //si estan marcadas se aumenta el contador (checked es el estado true o false)
                completadas.value++ //si estan marcadas va aumentar el contador
            } 
            contenedor.classList.add("estiloDiv")
            checkbox.classList.add("estiloCheck")
            boton.classList.add("estiloBotoncito")
            p.appendChild(boton)
            boton.innerHTML = "Eliminar"
            contTareas.appendChild(contenedor)
            boton.addEventListener("click", async() => {
                if (borrarDatos(iterar.id)) {
                    await Toast.fire({
                        title: 'OH NO, ¡ERROR!',
                        text: 'INGRESE UN TEXTO',
                        icon: 'error',
                        confirmButtonText: 'Cool'
                      })}
            })
            checkbox.addEventListener("click", () => {
                if (checkbox.checked != true) { //si es distinto de verdadero (falso)ejecutar la función y disminuir el contador
                    console.log("Entra aca");
                    actualizarDatos(iterar.id)
                    completadas.value--
                }else{ //sino se ejecuta la función el estado de la tarea el false y aumenta el contador
                    actualizarDatos(iterar.id)
                completadas.value++
                }
            })
        })
    
    } catch (error) {
        console.error(error);
    }
}


export{mostrar}