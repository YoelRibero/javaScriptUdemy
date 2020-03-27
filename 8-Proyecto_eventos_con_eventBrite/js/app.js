// Instanciar ambas clases
const eventbrite = new EventBrite();
const ui = new Interfaz();

// Listener al buscador

document.querySelector('#buscarBtn').addEventListener('click', (e) => {
    e.preventDefault();
    // Leer el texto del input buscar
    const textoBuscador = document.querySelector('#evento').value;
    // Leer Select
    const categorias = document.getElementById('listado-categorias');
    const categoriaSaleccionada = categorias.options[categorias.selectedIndex].value;
    console.log(`La categoría seleccionada es ${categoriaSaleccionada}`);
    console.log(`Texto: ${textoBuscador}`);
    // Revisar que haya algo escrito en el texto buscador
    if (textoBuscador !== '') {
        // Cuando hay búsqueda
        eventbrite.obtenerEventos(textoBuscador, categoriaSaleccionada);
    } else {
        // Mostrar mensaje para que imprima algo
        ui.mostrarMensaje('Escribe algo en el buscador', 'alert alert-danger mt-4');
    }
})