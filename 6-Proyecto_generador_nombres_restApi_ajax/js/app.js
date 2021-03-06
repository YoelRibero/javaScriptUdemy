document.querySelector('#generar-nombre').addEventListener('submit', cargarNombres);

// Llamado a Ajax e imprimir resultados
function cargarNombres(e) {
    e.preventDefault();
    // Leer variables
    const origen = document.getElementById('origen');
    const origenSeleccionado = origen.options[origen.selectedIndex].value;
    const genero = document.getElementById('genero');
    const generoSeleccionado = genero.options[genero.selectedIndex].value;
    const cantidad = document.getElementById('numero').value;
    
    let url = '';
    url += 'https://uinames.com/api/?';
    // Si hay orígen agregarlo a la url
    if (origenSeleccionado !== '') {
        url += `region=${origenSeleccionado}&`;
    }
    // Si hay género agregarlo a la url
    if (generoSeleccionado !== '') {
        url += `gender=${generoSeleccionado}&`;
    }
    // Si hay una cantidad agregarlo a la url
    if (cantidad !== '') {
        url += `amount=${cantidad}&`;
    }
    // Conectar con AJAX 
    // iniciar XMLHttpRequest
    const xhr = new XMLHttpRequest();
    // Abro conexión
    xhr.open('GET', url, true);
    // Datos e impresión del template
    xhr.onload = function() {
        if (this.status === 200) {
            const nombres = JSON.parse(this.responseText);
            // Genero HTML
            let htmlNombres = '<h2>Nombres Generados</h2>'
            htmlNombres += '<ul class="lista">';
            // Imprimo cada nombre
            nombres.forEach(nombre => {
                htmlNombres += `
                    <li>${nombre.name}</li>
                `;
            })
            htmlNombres += '</ul>'

            document.getElementById('resultado').innerHTML = htmlNombres;
        }
    }
    // Enviar el request
    xhr.send();
}