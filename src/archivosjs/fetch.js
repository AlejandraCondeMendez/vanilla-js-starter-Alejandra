//POST
async function dataApi(email, password) {
    try {
        const response = await fetch(`http://localhost:3000/api/task`, {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify
                ({
                    id: Date.now(),
                    email: email,
                    password: password
                })
        })

        let data = await response.json()
        console.log(data);
        console.log(`se agregó el correo ${email}`);

    } catch (error) {
        console.error(error);
    }
}

//GET
async function extraerApi() {
    try {
        const response = await fetch(`http://localhost:3000/api/task`)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error);
    }
}

export { extraerApi }
export { dataApi }


