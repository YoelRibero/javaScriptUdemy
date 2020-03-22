document.getElementById('txtBtn').addEventListener('click', cargarTXT);
document.getElementById('jsonBtn').addEventListener('click', cargarJSON);
document.getElementById('apiBTN').addEventListener('click', cargarREST);

function cargarTXT() {
    fetch('datos.txt')
        .then(function(res) {
            return res.text();
        })
        .then(function(data) {
            console.log(data);
            document.getElementById('resultado').innerHTML = data;
        })
        .catch(function(error){
            console.log(error);
        });
}

function cargarJSON() {
    fetch('empleados.json')
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            let html = '';
            data.forEach(empleado => {
                html += `
                    <li>${empleado.nombre} ${empleado.puesto}</li>
                `;
            })
            document.getElementById('resultado').innerHTML = html;
        })
        .catch(function(error){
            console.log(error);
        })
}

function cargarREST() {
    fetch('https://picsum.photos/list')
        .then(function(res) {
            return res.json();
        })
        .then(function(imagenes) {
            let html = '';
            imagenes.forEach(imagen => {
                html += `
                    <li>
                        ${imagen.author}   
                        <a href="${imagen.post_url}" target="_blank">Ver imágen</a> 
                    </li>
                `;
            })
            document.getElementById('resultado').innerHTML = html;
        })
        .catch(function(error){
            console.log(error);
        })
}