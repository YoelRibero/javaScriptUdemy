// window binding

function obtenerAuto() {
    console.log(`Mi auto es color ${this.color}`);
}

const color = 'Negro'; // Undefined
// Si no lo encuentra en ningú lado lo busca en el objeto window
window.color = 'Negro'; // Color Negro

obtenerAuto();