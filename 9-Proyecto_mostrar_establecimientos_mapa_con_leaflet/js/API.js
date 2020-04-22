class API {
    async obtenerDatos() {
        const total = 1000;
        // Obtener datos desde api
        const datos = await fetch(`https://api.datos.gob.mx/v1/precio.gasolina.publico?pageSize=${total}`);
        // Datos como JSON
        const respuestaJSON = await datos.json();
        return respuestaJSON;
    }
}