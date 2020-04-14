// Un set permite crear una lista de valores, es similar a un arreglo solamente que no va a tener duplicados, cuando algo es duplicado no se agrega en el set.

let carrito = new Set();

// Agregar elementos
carrito.add('Camisa');
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');
carrito.add('Disco #3'); // Observar que como es un valor duplicado no lo añade

// Se puede pasar datos cuando se inicializa un set
let numeros = new Set([1,2,3,4,5,6,7,1,2,3,4]);

console.log(numeros);

// Se puede comprobar que un valor existe

console.log(carrito.has('camisa')); // Esto da true
console.log(carrito.has('guitarra')); // False

// Se puede borrar un elemento del set
// carrito.delete('Camisa');

// Se puede vaciar un Set
// carrito.clear();

// Recorrer Set con un forEach

carrito.forEach( (producto, index) => {
    console.log(`${index} : ${producto}`);
    // Vemos que las claves y los valores son completamente idénticos.
})

// Como convertir un set a array

const arregloCarrito = [...carrito]; // Los tres puntos y el corchete convierte el set en un arreglo.
console.log(arregloCarrito);

console.log(carrito);
console.log(carrito.size);