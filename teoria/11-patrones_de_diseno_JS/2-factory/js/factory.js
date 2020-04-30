// Se usa para elementos relacionados pero que no sabemos cuales van a ser instanciados

function ConstructorSitios () {
    this.crearElemento = function (texto, tipo) {
        let html;
        if (tipo === 'input') {
            html = new InputHTML(texto);
        } else if (tipo === 'img') {
            html = new ImageHTML(texto);
        } else if (tipo === 'h1') {
            html = new HeadingHTML(texto);
        } else if (tipo === 'p') {
            html = new ParrafoHTML(texto);
        }

        html.tipo = tipo; // Guardo el tipo para tenerlo disponible

        html.mostrar = function () {
            const elemento = document.createElement(this.tipo);
            if(this.tipo === 'input') {
                elemento.setAttribute('placeholder', this.texto);
            } else if (this.tipo === 'img') {
                elemento.setAttribute('src', this.texto);
            } else {
                elemento.appendChild(document.createTextNode(this.texto));
            }
            document.querySelector('#app').appendChild(elemento);
        }

        return html;
    }
}

const InputHTML = function(texto) {
    this.texto = texto;
}
const ImageHTML = function(texto) {
    this.texto = texto;
}
const ParrafoHTML = function(texto) {
    this.texto = texto;
}
const HeadingHTML = function(texto) {
    this.texto = texto;
}

const sitioWeb = new ConstructorSitios();

// almacenar los elementos
const elementosWeb = [];

elementosWeb.push( sitioWeb.crearElemento('Bienvenidos', 'h1') );
elementosWeb.push( sitioWeb.crearElemento('Bienvenidos a mi nuevo sitio web', 'p') );
elementosWeb.push( sitioWeb.crearElemento('logo.svg', 'img') );
elementosWeb.push( sitioWeb.crearElemento('Conoce más sobre nosotros', 'h1') );
elementosWeb.push( sitioWeb.crearElemento('Contacto', 'input') );
elementosWeb.push( sitioWeb.crearElemento('Contactanos en el formulario', 'p') );

// console.log(elementosWeb);
elementosWeb.forEach(elemento => {
    console.log(elemento);
    elemento.mostrar();
})