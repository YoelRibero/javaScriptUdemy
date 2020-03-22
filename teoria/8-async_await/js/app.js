// Async Await (No soportado por todos los navegadores)

async function obtenerClientes() {
    // Crear una promise
    const clientes = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Clientes descargados...`);
        }, 2000);
    });
    // error o no
    const error = false;
    if (!error) {
        const respuesta = await clientes;
        return respuesta;
    } else {
        await Promise.reject(`Hubo un error...`);
    }
}

obtenerClientes()
    .then(res => console.log(res))
    .catch(error => console.log(error))

// Consumiendo una api con async await y fetch

async function leerToDos() {
    // esperar la respuesta
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos');
    // Procede cuando la respuesta este hecha
    const datos = await respuesta.json();
    console.log(datos);
}

(async function(){
    await leerToDos();
})();
