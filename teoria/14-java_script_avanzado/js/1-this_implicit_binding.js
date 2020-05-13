// This con Implicit Binding

const usuario = {
    nombre: 'Yoel',
    edad: 20,
    presentacion() {
        console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad}`);
    },
    mascota: {
        nombre: 'León',
        edad: 12,
        presentacion() {
            console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad}`);
        }
    }
}

usuario.presentacion();
usuario.mascota.presentacion();