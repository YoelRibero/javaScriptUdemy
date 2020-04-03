
// Destructuring forma anterior

// function reservacion(completo, opciones) {
//     opciones = opciones || {};
//     let metodo = opciones.metodoPago,
//         cantidad = opciones.cantidad,
//         dias = opciones.dias;

//     console.log(metodo);
//     console.log(cantidad);
//     console.log(dias);
// }

// reservacion (
//     true,
//     {
//         metodoPago : 'Tarjeta',
//         cantidad: 2000,
//         dias: 3
//     }
// );

// Forma nueva con Destructuring

function reservacion(completo, opciones) {
    let { metodoPago, cantidad, dias } = opciones;

    console.log(metodoPago);
    console.log(cantidad);
    console.log(dias);
}

reservacion (
    true,
    {
        metodoPago : 'Tarjeta',
        cantidad: 2000,
        dias: 3
    }
);

// Pasar valores de parámetros por default

function reservacionTwo(completo, { metodoPago = 'Efectivo', cantidad = 0, dias = 0 } = {} ) {

    if (completo) {
        console.log('Proceder a reservar...')
    } else {
        console.log('Abandonar...')
    }

    console.log(metodoPago);
    console.log(cantidad);
    console.log(dias);
}

reservacionTwo (
    false,
    {
    }
);

reservacionTwo (
    true,
    {
        metodoPago : 'Tarjeta',
        cantidad: 2000,
        dias: 3
    }
);
