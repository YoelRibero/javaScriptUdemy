// Es una función que retorna un iterador, se indica con un * después de la palabra function

function *crearGenerador() {
    // yield 
    yield 1;
    yield 'Nombre';
    yield 3+3;
    yield true;
}

const iterador1 = crearGenerador();

console.log(iterador1.next().value);
console.log(iterador1.next().value);
console.log(iterador1.next().value);
console.log(iterador1.next().value);
console.log(iterador1.next().value);

// Creamos generador que devuelve arreglo

function *nuevoGenerador(carrito) {
    for(let i = 0; i < carrito.length; i++) {
        yield carrito[i];
    }
}

// Creamos el carrito
const carrito = ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4'];

// recorremos iterador

let iterador = nuevoGenerador(carrito);

console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
