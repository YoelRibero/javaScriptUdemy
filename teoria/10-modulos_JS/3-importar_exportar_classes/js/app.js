import { nombreCLiente, ahorro, mostrarInformacion, Cliente } from "./cliente.js";

const info = mostrarInformacion(nombreCLiente, ahorro);

// Utilizar la clase

let cliente = new Cliente(nombreCLiente, ahorro);
console.log(cliente.mostrarInformacion());

// Si importaramos de la otra manera quedaría de la siguiente forma

// import * as clientes from './cliente.js';

// console.log(clientes);
// const info = clientes.mostrarInformacion(clientes.nombreCLiente, clientes.ahorro);
// console.log(info)

// Utilizar la clase

// let cliente = new clientes.Cliente(clientes.nombreCLiente, clientes.ahorro);