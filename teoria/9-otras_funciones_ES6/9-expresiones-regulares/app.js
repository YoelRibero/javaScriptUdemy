// Hay dos formas de crear expresiones regulares

const exp1 = new RegExp('/abc/');
const exp2 = /abc/;

console.log(exp1);
console.log(exp2);

let valor, valor2, expReg;

expReg = /[0123456789]/; // Esto se puede escribir así [0-9]
valor = 1992;
valor2 = 'Hola';

// Esto evalúa si lo que le paso como valor está en la expresión regular
console.log(expReg.test(valor)); // true
console.log(expReg.test(valor2)); // false

// Una fecha en expresión regular 20-10-2018 - \d - Busca números
let expRegDate = /\d\d-\d\d-\d\d\d\d/;
let valorDate = '20-10-2018';

console.log('Resultado de evaluación de fecha:');
console.log(expRegDate.test(valorDate)); // true

// Hora 10:30
let expRegHour = /\d\d:\d\d/;
let valorHour = '10:30';

console.log('Resultado de evaluación de hora:');
console.log(expRegHour.test(valorHour)); // true

// Hora 10:30 AM o PM - \D busca un caracter que no sea un número.
let expRegHourAM = /\d\d:\d\d \D\D/; 
let valorHourAM = '10:30 AM';

console.log('Resultado de evaluación de hora con AM:');
console.log(expRegHourAM.test(valorHourAM)); // true

// Para ahorrar escribir tantas veces lo mismo podemos escribir un símbolo de + al lado del caracter que queremos que se repita

let expRegMore = /\d+/;
let valorMore = 10234568789;

console.log(expRegMore.test(valorMore)); // true

// Negar la expresión 

let expRegNegative = /[^0-9]/;
let valorNegative = 1992;

console.log('Resultado de negar expreión regular:');
console.log(expRegNegative.test(valorNegative)); // false

// Sintaxis (1,2)

let expRegKey = /\d{1,2}-\d{1,2}-\d{4}/;
let valorKey = '10-10-2018';
// let valorKey = '1-1-2018'; // true
// let valorKey = '1-100-2018'; // false
// let valorKey = '10-10-203'; // false

console.log('Resultado de fecha con método (1,2):');
console.log(expRegKey.test(valorKey));

// Evaluar letras o números - con \w+
let expRegNumWor = /\w+/;
let valorNumWor = 'Mensaje de prueba';
// let valorNumWor = 1234; // true
// let valorNumWor = ' '; // false

console.log('Resultado de letras o números:');
console.log(expRegNumWor.test(valorNumWor));

// Evaluar que solo sean números
let expRegNum = /([0-9])\w+/;
let valorNum = 1234; 
// let valorNum = 'Hola Mundo'; // false

console.log('Resultado de sólo números:');
console.log(expRegNum.test(valorNum));

// Texto con sólo mayúsculas
let expRegWordMy = /([A-Z])\w+/;
// let valorWordMy =  'hola mundo'; // false
// let valorWordMy =  1234; // false
let valorWordMy =  'MENSAJE EN MAYÚSCULAS'; // true

console.log('Resultado de letras en mayúsculas:');
console.log(expRegWordMy.test(valorWordMy));

// Texto con sólo minúsculas
let expRegWordMin = /([a-z])\w+/;
let valorWordMin =  'hola mundo'; // false
// let valorWordMy =  1234; // false
// let valorWordMin =  'MENSAJE EN MAYÚSCULAS'; // false

console.log('Resultado de letras en minúscula:');
console.log(expRegWordMin.test(valorWordMin));

// Expresión regular para mail
let expRegMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let valorMail = 'correo99@correo.com';

console.log('Resultado de evaluación de mail:');
console.log(expRegMail.test(valorMail));
