class Interfaz {

    constructor() {
        this.init();
    }
    init() {
        this.construirSelect();
    }
    async construirSelect() {
        const monedas = await cotizador.obtenerMonedasAPI();
        // Crear select de opciones
        const select = document.querySelector('#criptomoneda');
        // Iterar por resultados de api
        for (const [key, value] of Object.entries(monedas.monedas.Data)) {
            // añadir el symbol y el name como opciones del select
            const option = document.createElement('option');
            option.value = value.Symbol;
            option.appendChild(document.createTextNode(value.CoinName));
            select.appendChild(option);
        }
    }
    mostrarMensaje(mensaje, clases) {
        const div = document.createElement('div');
        div.className = clases;
        div.appendChild(document.createTextNode(mensaje));
        // Seleccionar mensajes
        const divMensaje = document.querySelector('.mensajes');
        divMensaje.appendChild(div);
        // Mostrar contenido
        setTimeout(() => {
            document.querySelector('.mensajes div').remove();
        }, 3000);
    }
    // Imprime el resultado de la cotización
    mostrarResultado(resultado, moneda, crypto) {
        // En caso de un resultado anterior, ocultarlo
        const resultadoAnterior = document.querySelector('#resultado > div');
        if(resultadoAnterior) {
            resultadoAnterior.remove();
        }
        const datosMoneda = resultado[crypto][moneda];
        // recortar dígitos de precio
        let precio = datosMoneda.PRICE.toFixed(2),
            porcentaje = datosMoneda.CHANGEPCTDAY.toFixed(2),
            actualizado = new Date(datosMoneda.LASTUPDATE * 1000).toLocaleDateString('es-MX');
        // construir template
        let templateHTML = `
            <div class="card bg-warning">
                <div class="card-body text-light">
                    <h2 class"card-title">Resultado</div>
                    <p>El precio de ${datosMoneda.FROMSYMBOL} a moneda ${datosMoneda.TOSYMBOL} es de: $${precio}</p>
                    <p>Variación último día: % ${porcentaje}</p>
                    <p>Última actualización: ${actualizado}</p>
                </div>
            </div>
        `;
        this.mostrarOcultarSpiner('block')
        setTimeout(() => {
            // insertar resultado
            document.querySelector('#resultado').innerHTML = templateHTML;
            // ocultar spiner
            this.mostrarOcultarSpiner('none');
        }, 2000)
    }
    // mostrar el spiner de carga al enviar la cotización
    mostrarOcultarSpiner(vista) {
        const spiner = document.querySelector('.contenido-spinner');
        spiner.style.display = vista;
    }
}