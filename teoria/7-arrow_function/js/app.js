let aprendiendo;

aprendiendo = function() {
    console.log('Aprendiendo JavaScript');
}

aprendiendo = () => {
    console.log('Aprendiendo JavaScript');
}

// Una línea no requiere llaves
aprendiendo = () => console.log('Aprendiendo JavaScript');
// Retorna valor
aprendiendo = () => 'Aprendiendo JavaScript';
// Retorna objeto
aprendiendo = () => ({aprendiendo: 'Aprendiendo JavaScript'});
// Pasar parámetros
aprendiendo = (tecnologia) => console.log(`Aprendiendo ${tecnologia}`);
// Pasando un parámetro, cuando se pasa un parámetro los paréntesis son opcionales
aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`);
aprendiendo('JavaScript');
// Pasando más de un parámetro, requiere paréntesis
aprendiendo = (tec1, tec2) => console.log(`Aprendiendo ${tec1} y ${tec2}`);

aprendiendo('JavaScript', 'ES6');

const productos = ['Disco', 'Camisa', 'Guitarra'];

// const letrasProductos = productos.map(function(producto) {
//     return producto.length;
// })

// Callback con arrow function
// const letrasProductos = productos.map((producto) => {
//     return producto.length;
// });

// Callback con arrow function simplificado
const letrasProductos = productos.map(producto => producto.length);

console.log(letrasProductos);

productos.forEach(producto => console.log(producto));

// Proyecto cargar txt, cargar JSON y cargar api con arrow function

document.getElementById('txtBtn').addEventListener('click', cargarTXT);
document.getElementById('jsonBtn').addEventListener('click', cargarJSON);
document.getElementById('apiBTN').addEventListener('click', cargarREST);

function cargarTXT() {
    fetch('datos.txt')
        .then(res => res.text())
        .then(data => document.getElementById('resultado').innerHTML = data)
        .catch(error => console.log(error));
}

function cargarJSON() {
    fetch('empleados.json')
        .then(res => res.json())
        .then(data => {
            let html = '';
            data.forEach(empleado => {
                html += `
                    <li>${empleado.nombre} ${empleado.puesto}</li>
                `;
            })
            document.getElementById('resultado').innerHTML = html;
        })
        .catch(error => console.log(error))
}

function cargarREST() {
    fetch('https://picsum.photos/list')
        .then(res => res.json())
        .then(imagenes => {
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
        .catch(error => console.log(error));
}


