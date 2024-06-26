import { mostrar } from "./mostrarHTML";

async function borrarDatos(id) {
    try {
        const response = await fetch (`http://localhost:3000/api/task/${id}`, {
            method: "DELETE"
        })
        if (!response.ok) { // Si la respuesta salio mal
            throw new Error ("Algo salió mal")   
        }
        console.log(`se borró la tarea: ${id}`);
        await mostrar()
    } catch (error) {
        console.log(error);   
    }
    //recagar para no mover los datos
}

export{borrarDatos}