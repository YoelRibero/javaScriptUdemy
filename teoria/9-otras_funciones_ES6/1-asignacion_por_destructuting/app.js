const cliente1 = {
    nombre: 'Alejandra',
    tipo: 'Premium'
}

// Forma vieja de llamar a un valor del objeto
// let nombre = cliente.nombre, 
//     tipo = cliente.tipo;

// nombre = 'Pedro';
// tipo = 'Gold';

// Con destructuring
// let {nombre, tipo} = cliente;
// ( {nombre, tipo} = cliente1 );

// Aunque arriba reasignamos las variables nombre y tipo, el destructuring va a buscar siempre el objeto en el scope global.

// console.log(nombre);
// console.log(tipo);

// Accediendo a un objeto dentro de un objeto

const cliente2 = {
    tipo: 'Premium',
    nombre: 'Antonio',
    datos: {
        ubicación: {
            ciudad: 'Montevideo',
            pais: 'Uruguay'
        },
        cuenta: {
            desde: '10-12-2012',
            saldo: 4000
        }
    }
}

let { datos: {ubicación} } = cliente2;

console.log(ubicación);
console.log(ubicación.ciudad);
console.log(ubicación.pais);

let { datos: {cuenta} } = cliente2;

console.log(cuenta);
console.log(cuenta.desde);
console.log(cuenta.saldo);

// Extraer de un objeto valores por default

const cliente3 = {
    nombre: 'Yoel'
    // tipo: 'Premium' -> Si el tipo tampoco lo tenemos también le podemos dar un valor por default
    // saldo: 3000 -> Supongamos que no se si saldo va a existir, entonces lo inicializo con un valor
}

let {nombre, tipo = 'Básico', saldo = 0} = cliente3;

console.log(nombre);
console.log(tipo);
console.log(saldo);
