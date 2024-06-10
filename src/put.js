async function actualizarDatos(id) {
    try {
        const tareasResponse = await fetch(`http://localhost:3000/api/task/${id}`)
        const data = await tareasResponse.json()
        listTarea = {
            estado: !data.estado //Estado va a tener el valor inverso del estado de la tarea. Es decir, si es false, le vamos a dar el valor de true, pero si es true le vamos a dar el valor de false
        }
        const response = await fetch (`http://localhost:3000/api/task/${id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(listTarea)
        });
        
        const guardarResponse = await response.json()
        console.log(guardarResponse);

    } catch (error) {
        console.log(error);
    }   
}   

export{actualizarDatos}