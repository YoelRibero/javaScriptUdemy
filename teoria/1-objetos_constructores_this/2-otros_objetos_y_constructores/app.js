// Strings utilizando constructores
const nombre1 = 'Pedro';
const nombre2 = new String('Pedro');

console.log(typeof nombre1); // String
console.log(typeof nombre2); // Object

// Número utilizando constructores
const number1 = 20;
const number2 = new Number(20);

console.log(typeof number1); // Number
console.log(typeof number2); // Object

// Booleanos utilizando constructores
const boolean1 = true;
const boolean2 = new Boolean(true);

// Funciones
const funcion1 = function(a,b) {
    return a+b;
}

const funcion2 = new Function('a', 'b', 'return a+b');

console.log(funcion1(2,3)); // 5
console.log(funcion2(5,3)); // 8

// Objetos
const persona1 = {
    nombre: 'Juan'
}

const persona2 = new Object({nombre: 'Juan'});

console.log(persona1); // {nombre: "Juan"}
console.log(persona2); // {nombre: "Juan"}

// Arrays
const array1 = [1,2,3,4];

const array2 = new Array[1,2,3,4];