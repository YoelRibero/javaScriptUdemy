
const ciudades = ['Londres', 'New York', 'Madrid', 'Paris', {
    idioma: 'English'
}];

const [primeraCiudad, segundaCiudad] = ciudades;

console.log(primeraCiudad);
console.log(segundaCiudad);

// Si quiero extraer la última ciudad?

const [ , , ciudad, paris] = ciudades;

console.log(ciudad);
console.log(paris);

// Ejemplo avanzado

const cliente = {
    tipo: 'Premium',
    saldo: 30000,
    datos: {
        nombre: 'Pedro',
        apellido: 'Pérez',
        residencia: {
            ciudad: 'Montevideo',
            pais: 'Uruguay'
        }
    },
    movimientos: ['02-04-2020', '02-02-2020', '05-01-2020']
}

let { 
    tipo, 
    datos, 
    datos: {residencia}, 
    movimientos : [ , movDos] 
} = cliente;

console.log(tipo);
console.log(datos.apellido);
console.log(residencia);
console.log(movDos);
