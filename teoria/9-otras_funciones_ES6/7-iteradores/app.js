// Bucle de toda la vida
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

function crearIterador(carrito) {
    // Inicializamos el indice
    let i = 0;
    return {
        siguiente: () => {
            let fin = (i >= carrito.length);
            let valor = !fin ? carrito[i++] : undefined;
            return {
                fin: fin,
                valor: valor
            }
        }
    }
}

const carrito = ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4'];

const recorrerCarrito = crearIterador(carrito);

console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());

// La ventaja de tener un iterador es que tenes control total de lo que pasa en cada iteración
