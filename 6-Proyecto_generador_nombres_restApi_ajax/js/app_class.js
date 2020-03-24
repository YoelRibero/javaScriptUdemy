class API {
    async getNames(url) {
        const data = await fetch(url);
        const dataResult = await data.json();
        return dataResult;
    }
}

class Interfaz {
    
    namesList(data) {
        let html = '<h2>Nombres Generados</h2>'
        html += `<ul class="lista">`
        data.forEach(nombre => {
            html += `
                <li>${nombre.name}</li>
            `
        });
        html += `</ul>`
        document.querySelector('#resultado').innerHTML = html;
    } 
}

document.querySelector('#generar-nombre').addEventListener('submit', cargarNombres);

async function cargarNombres(e) {
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

    // Instancio clase de fetch y obtengo datos
    const rest = new API();
    const data = await rest.getNames(url);
    // Pinto datos en pantalla
    const ui = new Interfaz();
    ui.namesList(data);
}