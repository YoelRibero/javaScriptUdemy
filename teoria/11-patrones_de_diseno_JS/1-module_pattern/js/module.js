// No tiene nada que ver con los módulos de JavaScript

// Este es el ejemplo más utilizado en patrones de diseño
const comprarBoleto = (function () {
    // Privado - Se dice que es privado porque solo se puede acceder desde dentro de la función
    let evento = 'Conferencia JS 2019';
    let precio = 200; // No se puede acceder a esta variable desde fuera
    const adquirirBoleto = () => {
        const elemento = document.createElement('p');
        elemento.textContent = `Comprando boleto para: ${evento}`;
        document.querySelector('#app').appendChild(elemento);
    }

    // Publico - Es público porq vamos a poder acceder a el desde cualquier lado del código. Para ser público debe estar dentro de un return
    return {
        mostrarBoleto: function() {
            // console.log(evento);
            adquirirBoleto(); // Imprimo aquí la función para tener su valor disponible desde fuera
        }
    }
})(); // A esto se le llama EFI

comprarBoleto.mostrarBoleto();
// console.log(precio);
// console.log(comprarBoleto.evento); // esto da "undefined"