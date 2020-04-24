import { Cliente } from './cliente.js';

// Exportar variables
export const nombreEmpresa = 'Platzi';
export let ahorro = 20000000;
export const categoria = 'Aprendizaje'

// Exportar funciones
export function mostrarInformacion(nombre, ahorro, categoria) {
    return `Cliente: ${nombre} - Ahorro ${ahorro} - Categoría: ${categoria}`;
}

// Utilizar clase del módulo cliente

export class Empresa extends Cliente {
    constructor(nombre, ahorro, categoria) {
        // Para acceder a elementos de clase padre utilizamos super()
        super(nombre, ahorro);
        this.categoria = categoria;
    }
    mostrarInformacion() {
        return `Cliente: ${this.nombre} - Ahorro ${this.ahorro} Categoría: ${this.categoria}`;
    }
}
