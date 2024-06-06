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

export{extraerDatos}