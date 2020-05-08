// Arreglo con arreglo dentro de otro arreglo
const edades = [8,10,9, 11, [13,18, 20, [18,20,21]]];

// flat nos sirve para aplanar todo el resultado en un único arreglo
console.log(edades.flat(2)); // Aplana todo el array en uno solo
console.log(edades.flat(Infinity)) // Aplana todo lo que haya en el arreglo.