// De esta manera importamos las variables que vienen desde cliente.js
// import { nombreCLiente, ahorro } from "./cliente.js";
// Con import * dejamos disponibles todas la variables que tiene el archivo, en este caso cliente.
import * as cliente from './cliente.js';

// console.log(nombreCLiente);
// console.log(ahorro);
// const info = mostrarInformacion(nombreCLiente, ahorro);
// console.log(info);

console.log(cliente); // Esto nos genera un Symbol, si queremos acceder a el accedemos con .y el nombre de la variable que queremos imprimir.

// Si vamos a querer variables puntuales es mejor hacerlo de la otra forma