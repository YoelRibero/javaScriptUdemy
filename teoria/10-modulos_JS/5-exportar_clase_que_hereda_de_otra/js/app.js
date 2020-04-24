import { nombreCLiente, ahorro, mostrarInformacion, Cliente } from "./cliente.js";
import { nombreEmpresa, ahorro as ahorroEmpresa, categoria, mostrarInformacion as informacionEmpresa, Empresa } from './empresa.js';

// Clase empresa
let empresa = new Empresa(nombreEmpresa, ahorroEmpresa, categoria);
console.log(empresa.mostrarInformacion());

// Clase cliente
let cliente = new Cliente(nombreCLiente, ahorro);
console.log(cliente.mostrarInformacion());