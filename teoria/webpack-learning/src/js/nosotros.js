import '../css/styles.css';
import '../css/style-sass.scss';

const carrito = ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4'];

console.log(carrito);

const cliente = (nombreCliente) => nombreCliente;

class Cliente {
    constructor (nombre) {
        this.nombre = nombre;
    }
}

const cliente2 = new Cliente('Yoel');

console.log(cliente2);

console.log('Desde Nosotros');
