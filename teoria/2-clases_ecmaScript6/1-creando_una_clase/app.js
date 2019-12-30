// Creando clases

class Cliente {
    constructor(nombre, apellido, saldo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.saldo = saldo;
    }
    imprimirSaldo() {
        return `Hola ${this.nombre}, tu saldo es de: ${this.saldo}`;
    }
    tipoCliente() {
        let tipo;
        if(this.saldo > 10000) {
            tipo = 'Gold';
        } else if(this.saldo > 5000) {
            tipo = 'Platinum';
        } else {
            tipo = 'Normal';
        }
        return tipo;
    }
    retirarSaldo(retiro) {
        return this.saldo -= retiro;
    }
    // Declaro método estático, no debe ser instanciado lo llamamos directamente desde la clase, no necesitamos crear un nuevo objeto.
    static bienvenida() {
        return `Bienvenid@ al cajero`;
    }
}

console.log(Cliente.bienvenida());

const julieta = new Cliente('Julieta', 'Ribero', 11000);
julieta.retirarSaldo(1000)

console.log(julieta.imprimirSaldo());