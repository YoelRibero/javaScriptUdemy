// Son listas ordenadas que almacenan valores como llave y valor

let cliente = new Map();

// Agregar datos
cliente.set('nombre', 'Yoel');
cliente.set('tipo', 'Premiun');
cliente.set('saldo', 3000);

// Métodos para los Maps
// Obtener valores
console.log(cliente.get('nombre'));
// Tamaño del map
console.log(cliente.size);
// Comprobar que un valor existe
console.log(cliente.has('tipo')); // true
console.log(cliente.has('apellido')); // false
// Borrar elemento del map
// cliente.delete('nombre');
// Limpiar map
// cliente.clear();

console.log(cliente);

// Pasar propiedades por default a un Map
const paciente = new Map(
    [
        ['nombre', 'paciente'], // Si no le pasamos un nombre paciente será el valor por defecto
        ['habitacion', 'No definido']
    ] 
);

paciente.set('nombre', 'Antonio');
paciente.set('habitacion', 400);

// Recorrer map con forEach
paciente.forEach((datos, index) => {
    console.log(`${index} : ${datos}`);
})

console.log(paciente);
