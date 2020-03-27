class EventBrite {
    constructor() {
        this.token_auth = '3OAEKY6ZD2R4AGVUBGFW';
        this.ordenar = 'date';
    }
    // Mostrar resultados de búsqueda
    async obtenerEventos(evento, categoria) {
        // La Api ya no tiene la funcionalidad de buscador
        const respuestaEvento = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${evento}&sort_by=${this.ordenar}&categories=${categoria}&token=${this.token_auth}`);
        const eventos = await respuestaEvento.json();
        console.log(eventos);
    }
    // Obtiene las categorías en init()
    async obtenerCategorias() {
        // Consultar las categorías a la REST API de event brite
        const respuestaCategorias = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`);
        // Esperar respuesta de categorías y devolver un JSON
        const categorias = await respuestaCategorias.json();
        // Devuelvo el resultado
        return categorias;
    }
}