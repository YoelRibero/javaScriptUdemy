// Creando clases

class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
    imprimirSaldo() {
        return `Hola ${this.nombre}, tu saldo es de: ${this.saldo}`;
    }
    // Declaro método estático, no debe ser instanciado lo llamamos directamente desde la clase, no necesitamos crear un nuevo objeto.
    static bienvenida() {
        return `Bienvenid@ al cajero`;
    }
}

console.log(Cliente.bienvenida());
const cliente = new Cliente('Julieta', 1000);
console.log(cliente.imprimirSaldo());

// Hereda de Cliente todos sus atributos y métodos
class Empresa extends Cliente{
    constructor(nombre, saldo, telefono, tipo) {
        // super va al constructor padre y accede a los valores que le indico como parámetro
        super(nombre, saldo);
        this.telefono = telefono;
        this.tipo = tipo;
    }
    // Podemos reescribir métodos
    static bienvenida() {
        return `Bienvenid@ al cajero para Empresas`;
    }
}

console.log(Empresa.bienvenida());

const empresa = new Empresa('Empresa', 10000, 123456789, 'Construcción');

console.log(empresa.imprimirSaldo());