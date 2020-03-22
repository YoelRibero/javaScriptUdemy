// Promises

const esperando = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('Se ejecutó');
    }, 5000)
});

esperando.then(function(mensaje) {
    console.log(mensaje)
})

// Forzando error en promises
const aplicarDescuento = new Promise(function(resolce, reject) {
    const descuento = false;
    if (descuento) {
        resolve('Descuento aplicado');
    } else {
        reject('No se puede aplicar el descuento');
    }
});

aplicarDescuento.then(function(mensaje) {
    console.log(mensaje);
}).catch(function(error) {
    console.log(error);
})