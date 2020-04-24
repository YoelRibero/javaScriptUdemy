import { nombreCLiente, ahorro, mostrarInformacion, mostrarNombre } from "./cliente.js";

console.log(nombreCLiente);
console.log(ahorro);


const info = mostrarInformacion(nombreCLiente, ahorro);
console.log(info);

const mostrarNombreCliente = mostrarNombre(nombreCLiente);
console.log(mostrarNombreCliente);
