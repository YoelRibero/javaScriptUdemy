// SYMBOL

const simbolo = Symbol(); // Primitivo de JS
const simbolo2 = Symbol('Descripcion aqui');

// Cada Symbol es diferente si quisiéramos comparar dos Symbols nos da false

// Ejemplo

let nombre = Symbol();
let apellido = Symbol();

// Crear persona

let persona = {};

persona.nombre = 'Juan'; // Aca agregamos una clave valor a nuestro objeto, no estamos manipulando el symbol
persona[nombre] = 'Juan'; // Aquí si estamos manipulando el Symbol (ver console.log)
persona[apellido] = 'De la torre';
persona.saldo = 100;
persona.tipoCliente = 'Normal';

console.log(persona);
console.log(persona.nombre); // Accedemos a valores de objeto
console.log(persona[nombre]); // Accedemos a valor de Symbol

// Los Symbols no pueden ser iterados

for (let i in persona) {
    console.log(`Iteración : ${i} : ${persona[i]} `);
}
