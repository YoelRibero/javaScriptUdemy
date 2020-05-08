const map = new Map([ 
    ['nombre', 'Producto 1'], 
    ['precio', 20] 
]);

// Permite crear un objeto desde una serie de claves y valores
const objeto = Object.fromEntries(map);
console.log(objeto);

delete objeto.precio;

console.log(objeto);