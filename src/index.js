
// Inserte el código aquí
let inputTarea = document.getElementById("inputTarea")
let btnAgregar = document.getElementById("btnAgregar")
let contTareas = document.getElementById("cont-tareas")

//primero creamos un método POST para guardar la lista de tareas en la API

async function insertarDatos() {
    try {
/*creamos una variable que contenga el texto del input (HTMLlas propiedades que va a tener la API son (id, título y estado (tarea completa o incompleta))*/
        const liTarea = { 
            id: Date.now(), 
            titulo: inputTarea.value,
            estado: false
        }
        const response = await fetch (`http://localhost:3000/api/task`, { //solicitamos los datos a la API
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(liTarea) //pasa liTarea (objeto) a formato json
        })
        const guardarResponse = await response.json()
        console.log(guardarResponse);
        console.log(`Se agrego la tarea ${liTarea.titulo}`);
        mostrar()
    } catch (error) {
        console.log(error);
    }
}

//creamos el método GET para llamar a la lista de tareas de la API

async function extraerDatos() {
    try {
        const response = await fetch (`http://localhost:3000/api/task`)
        if (response.ok) {
         const guardarResponse = await response.json()
         console.log(guardarResponse);
         return guardarResponse   
         
        }
    } catch (error) {
        console.log(error);
    }
}

//creamos una función para mostrar los datos en el HTML -- MÉTODO GET
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
            p.appendChild(boton)
            boton.innerHTML="Eliminar"
            contTareas.appendChild(contenedor)
            boton.addEventListener("click", () => {
                borrarDatos(iterar.id)
            })
        })
    
    } catch (error) {
        console.error(error);
    }
}

btnAgregar.addEventListener("click", insertarDatos)

//MÉTODO DELETE

async function borrarDatos(id) {
    try {
        const response = await fetch (`http://localhost:3000/api/task/${id}`, {
            method: "DELETE"
        })
        if (!response.ok) { //
            throw new Error ("Algo salió mal")   
        }
        console.log(`se borró la tarea: ${id}`);
    } catch (error) {
     console.log(error);   
    }
    mostrar()
}

mostrar()

//función PUT para actualizar datos 
/*primero hacemos el método get (traer los datos de la tarea que queremos actualizar) y luego el put  */

async function actualizarDatos(id) {
    try {
        const tareasResponse = await fetch(`http://localhost:3000/api/task/${id}`)
        const data = await response.json()

        listTarea = {
            estado: !data.estado
        }

        const response = await fetch (`http://localhost:3000/api/task/${id}`)
        
 } catch (error) {
    console.log(error);
 }   
}



