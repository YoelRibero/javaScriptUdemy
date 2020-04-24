// Exportar variables
export const nombreCLiente = 'Yoel';
export let ahorro = 200;

// Para que app.js se entere que esta función existe hay que ponerle la palabra export
export function mostrarInformacion(nombre, ahorro) {
    return `Cliente: ${nombre} - Ahorro ${ahorro}`;
}

// Función que muestra nombre
export function mostrarNombre(nombre) {
    return `Nombre del Cliente: ${nombre}`;
} 