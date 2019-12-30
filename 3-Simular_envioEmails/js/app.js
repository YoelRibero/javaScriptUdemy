// Variables
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');
const formularioEnviar = document.getElementById('enviar-mail');
const resetBtn = document.getElementById('resetBtn');

// Event listeners
eventListeners();

function eventListeners(){
    // Inicio de la aplicación y deshabilitar submit
    document.addEventListener('DOMContentLoaded', inicioApp);

    // Campos del formulario
    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);

    // Botón enviar en el submit
    btnEnviar.addEventListener('click', enviarEmail);

    // Botón de reset
    resetBtn.addEventListener('click', resetFormulario);
}


// Funciones
function inicioApp() {
    // deshabilitar el envío
    btnEnviar.disabled = true;
}

// Valida que campo tenga algo escrito
function validarCampo() {
    
    // Se valida la longitud del texto y que no esté vacío
    validarLongitud(this);

    // Validar únicamente email
    if(this.type === 'email') {
        validarEmail(this);
    }

    let errores = document.querySelectorAll('.error');

    if(email.value !== '' && asunto.value !== '' && mensaje.value !== '') {
        if(errores.length === 0) {
            btnEnviar.disabled = false;
        }
    }
}

// resetear formulario
function resetFormulario(e) {
    formularioEnviar.reset();
    e.preventDefault();
}

// Cuando se envía el correo
function enviarEmail(e) {
    // Spiner al presionar enviar
    const spinnerGif = document.querySelector('#spinner');
    spinnerGif.style.display = 'block';

    // Gif que envía email
    const enviado = document.createElement('img');
    enviado.src = 'img/mail.gif';
    enviado.style.display = 'block';

    // Ocultar spinner y mostrar gif de enviado
    setTimeout(function(){
        spinnerGif.style.display = 'none';
        document.querySelector('#loaders').appendChild(enviado);
        setTimeout(function() {
            enviado.remove();
            formularioEnviar.reset();
        }, 5000)
    }, 3000);

    e.preventDefault();
}

// Verifica longitud de textos en los campos
function validarLongitud(campo) {
    if(campo.value.length > 0) {
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}

function validarEmail(campo) {
    const mensaje = campo.value;
    if(mensaje.indexOf('@') !== -1) {
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}