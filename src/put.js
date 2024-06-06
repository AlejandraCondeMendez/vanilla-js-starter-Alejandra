async function actualizarDatos(id) {
    try {
        const tareasResponse = await fetch(`http://localhost:3000/api/task/${id}`)
        const data = await tareasResponse.json()
        listTarea = {
            estado: !data.estado
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