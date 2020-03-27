class Interfaz {
    constructor() {
        // Inicializa la app al instanciar
        this.init();
        // Leer resultado
        this.listado = document.getElementById('resultado-eventos');
    }
    // Método para cuando inicialice app
    init() {
        // Llamar a imprimir categorías
        this.imprimirCategorias();
    }
    // Imprimir categorías
    async imprimirCategorias() {
        const listCategorias = await eventbrite.obtenerCategorias();
        const categoriasData = listCategorias.categories;
        // Seleccionar el select de categorías
        const selectCategoria = document.querySelector('#listado-categorias');
        // Recorro arreglo e imprimo los options
        categoriasData.forEach(categoria => {
            const option = document.createElement('option');
            option.value = categoria.id;
            option.appendChild(document.createTextNode(categoria.name_localized));
            selectCategoria.appendChild(option);
        })
    }
    // Método para imprimir mensajes
    mostrarMensaje(mensaje, clases){
        const div = document.createElement('div');
        div.classList = clases;
        // agrega texto
        div.appendChild(document.createTextNode(mensaje));
        // buscar padre
        const buscadorDiv = document.querySelector('#buscador');
        buscadorDiv.appendChild(div);
        // Quitar alert después de 3s
        setTimeout(() => {
            this.limpiarMensaje();
        }, 3000)
    }
    // Desaparece mensaje en caso de que exista
    limpiarMensaje() {
        const alert = document.querySelector('.alert');
        if(alert) {
            alert.remove();
        }
    }
}