// Instanciar Clases, para que esten disponibles en toda la app
const cotizador = new API('1b8127f5efb7e07cafae3153decb477aecaa27ed1dd7e1b5a6d6e3bfac9f23f8');
const ui = new Interfaz();

// Leer el formulario 
const formulario = document.querySelector('#formulario');

// eventListener
formulario.addEventListener('submit', e => {
    e.preventDefault();
    // Leer moneda seleccionada
    const monedaSelect = document.querySelector('#moneda');
    const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;
    console.log(`Moneda Selecionada ${monedaSeleccionada}`);
    // Leer criptomoneda seleccionada
    const criptoMonedaSelect = document.querySelector('#criptomoneda');
    const criptoMonedaSeleccionada = criptoMonedaSelect.options[criptoMonedaSelect.selectedIndex].value;
    console.log(`CriptoMoneda Selecionada ${criptoMonedaSeleccionada}`);
    // Comprobar que ambos campos tengan algo seleccionado
    if(monedaSeleccionada === '' || criptoMonedaSeleccionada === '') {
        // Tirar alerta de error
        console.log('Selecciona Algo...');
        ui.mostrarMensaje('Ambos campos son obligatorios', 'alert bg-danger text-center');
    } else {
        // Todo bien, consultar api
        console.log('Todo Bien...')
        cotizador.obtenerValores(monedaSeleccionada, criptoMonedaSeleccionada)
            .then(data => {
                ui.mostrarResultado(data.resultado.RAW, monedaSeleccionada, criptoMonedaSeleccionada);
            })
    }
})