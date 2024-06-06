
// Inserte el código aquí
let inputTarea = document.getElementById("inputTarea")
let btnAgregar = document.getElementById("btnAgregar")
let contTareas = document.getElementById("cont-tareas")
let completadas = document.getElementById("tareasCompletadas")
//primero creamos un método POST para guardar la lista de tareas en la API

import { insertarDatos } from "./post"

//creamos el método GET para llamar a la lista de tareas de la API

import { extraerDatos } from "./get"

//creamos una función para mostrar los datos en el HTML -- MÉTODO GET

import { mostrar } from "./mostrarHTML"

btnAgregar.addEventListener("click", insertarDatos)

//función PUT para actualizar datos 
/*primero hacemos el método get (traer los datos de la tarea que queremos actualizar) y luego el put  */

import { actualizarDatos } from "./put"


//MÉTODO DELETE

import { borrarDatos } from "./delete"

mostrar()




function validacionInput() {
    if (inputTarea.value = "") {
        alert("INGRESE UN TEXTO") 
    }} 
