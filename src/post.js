import { mostrar } from "./mostrarHTML";

async function insertarDatos() {
    try {
/*creamos una variable que contenga el texto del input (HTMLlas propiedades que va a tener la API son (id, título y estado (tarea completa o incompleta))*/
        const liTarea = { //el cuerpo que debe tener la API
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
        location.reload() //recargamos la página 
    } catch (error) {
        console.log(error);
    }
}

export{insertarDatos}
