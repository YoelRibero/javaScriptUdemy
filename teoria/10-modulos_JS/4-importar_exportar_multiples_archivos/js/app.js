import { nombreCLiente, ahorro, mostrarInformacion, Cliente } from "./cliente.js";
import { nombreEmpresa, ahorro as ahorroEmpresa, categoria, mostrarInformacion as informacionEmpresa } from './empresa.js';

// Con as lo que le damos al valor es un alias para cuando tenemos dos valores con el mismo nombre no nos de conflictos

console.log(nombreCLiente);
console.log(nombreEmpresa);

console.log(ahorro);
console.log(ahorroEmpresa); // Se lo importa como ahorro empresa ya que los dos tienen el mismo nombre y sino daría erro porque están declarados con el mismo nombre

console.log(categoria);

// Info cliente
const info = mostrarInformacion(nombreCLiente, ahorro);
console.log(info);

// Info empresa
const infoEmpresa = informacionEmpresa(nombreEmpresa, ahorroEmpresa, categoria);
console.log(infoEmpresa);

