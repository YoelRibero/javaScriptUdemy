// Trata de crear una abstracción que nos permite crear distintos tipos de objetos

class Formulario {
    constructor() {
        this.campos = [];
    }

    agregarCampo (tipo, texto) {
        let campos = this.campos;
        let campo; 
        switch(tipo) {
            case 'text':
                campo = new InputText(texto);
                break;
            case 'email':
                campo = new InputEmail(texto);
                break;
            case 'button':
                campo = new Boton(texto);
                break;
            default:
                throw new Error('Tipo no válido' + tipo);
        }

        campos.push(campo);
    }

    obtenerFormulario() {
        let form = document.createElement('form'),
            campos = this.campos.length,
            campo;
        
            for(let i = 0; i < campos; i++) {
                campo = this.campos[i];
                form.appendChild(campo.crearElemento());
                let br = document.createElement('br');
                form.appendChild(br);
            }
        return form;
    }

}

class Inputs {
    constructor(texto) {
        this.texto = texto;
    }
}

class InputText extends Inputs {
    constructor (texto) {
        super(texto);
    }
    crearElemento () {
        const inputText = document.createElement('input');
        inputText.setAttribute('type', 'text');
        inputText.setAttribute('placeholder', this.texto);
        return inputText;
    }
}

class InputEmail extends Inputs {
    constructor (texto) {
        super(texto);
    }
    crearElemento () {
        const inputEmail = document.createElement('input');
        inputEmail.setAttribute('type', 'email');
        inputEmail.setAttribute('placeholder', this.texto);
        return inputEmail;
    }
}

class Boton extends Inputs {
    constructor (texto) {
        super(texto);
    }
    crearElemento () {
        const boton = document.createElement('button');
        boton.setAttribute('type', 'submit');
        boton.textContent = this.texto;
        return boton;
    }
}

// Instanciar formulario

const formulario = new Formulario();

formulario.agregarCampo('text', 'Añade tu nombre');
formulario.agregarCampo('text', 'Añade tu apellido');
formulario.agregarCampo('email', 'Añade tu correo');
formulario.agregarCampo('button', 'Enviar Formulario');


// Renderizar en el HTMl

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#app').appendChild(formulario.obtenerFormulario());
})

console.log(formulario);
