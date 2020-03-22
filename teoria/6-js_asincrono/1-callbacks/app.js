// Callback en Foreach

const ciudades = ['Londres', 'New York', 'Madrid', 'Paris', 'Viena'];

// Inline callback (Se recomienda usar esta forma)
ciudades.forEach( ciudad => {
    console.log(ciudad);
});

// Callback con función definida
// function callback(ciudad) {
//     console.log(ciudad);
// }
// ciudades.forEach(callback);

// Listado de países

const paises = ['Francia', 'España', 'Portugal', 'Australia', 'Inglaterra', 'Irlanda'];

//Se agrega un país después de 2 segundos
function nuevoPais(pais, callback) {
    setTimeout(() => {
        paises.push(pais);
        callback();
    }, 2000)
}

// Los países se muestran después de 1s
function mostrarPaises() {
    setTimeout(function(){
        let html = '';
        paises.forEach(pais => {
            html += `<li>${pais}</li>`
        })
        document.getElementById('app').innerHTML = html;
    }, 1000)
}

// Agregar nuevo pais
nuevoPais('Uruguay', mostrarPaises);

// Mostrar países
mostrarPaises();