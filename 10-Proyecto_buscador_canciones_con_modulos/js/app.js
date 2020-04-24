import { API } from './api.js';
import * as UI from './interfaz.js';

UI.formularioBuscar.addEventListener('submit', (e) => {
    e.preventDefault();

    // Obtener datos del formulario
    const artista = document.querySelector('#artista').value,
            cancion = document.querySelector('#cancion').value;
    console.log(artista);
    console.log(cancion);
    if (artista === '' || cancion === '') {
        // Si el usuario deja los campos vacíos se muestra error
        UI.divMensajes.innerHTML = 'Error... Todos los campos son obligatorios';
        UI.divMensajes.classList.add('error');
        setTimeout(() => {
            UI.divMensajes.innerHTML = '';
            UI.divMensajes.classList.remove('error');
        }, 3000)
    } else {
        // Formulario completo, realizar consulta a la api
        const api = new API(artista, cancion);
        api.consultarAPI()
            .then(data => {
                if (data.lyrics) {
                    // La canción existe
                    const letra = data.lyrics;
                    UI.divResultado.textContent = letra;
                } else {
                    // La canción no existe
                    UI.divMensajes.innerHTML = 'La canción no existe, prueba con otra búsqueda';
                    UI.divMensajes.classList.add('error');
                    setTimeout(() => {
                        UI.divMensajes.innerHTML = '';
                        UI.divMensajes.classList.remove('error');
                        UI.formularioBuscar.reset();
                    }, 3000)
                }
            })
    }
})