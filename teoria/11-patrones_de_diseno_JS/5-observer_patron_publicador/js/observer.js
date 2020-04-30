// Patrón de comportamiento, se lo conoce también como suscriptor-publicador

let observer = {
    obtenerOfertas: function(callback) {
        if(typeof callback === 'function') {
            this.subscribers[this.subscribers.length] = callback;
        }
    },
    cancelarOfertas: function(callback) {
        for (let i = 0; i < this.subscribers.length; i++) {
            if (this.subscribers[i] === callback) {
                delete this.subscribers[i];
            }
        }
    },
    publicarOferta: function(oferta) {
        for (let i = 0; i < this.subscribers.length; i++) {
            if (typeof this.subscribers[i] === 'function') {
                this.subscribers[i](oferta);
            }
        }
    },
    crear: function(objeto) {
        for(let i in this) {
            if (this.hasOwnProperty(i)) {
                objeto[i] = this[i];
                objeto.subscribers = [];
            }
        }
    }
}

// Vendedores

const udemy = {
    nuevoCurso: function() {
        const curso = 'Un nuevo curso de JavaScript!';
        this.publicarOferta(curso);
    }
}

const facebook = {
    nuevoAnuncio: function() {
        const oferta = 'Compra un celular';
        this.publicarOferta(oferta);
    }
}

// Crear los publicadores
observer.crear(udemy);
observer.crear(facebook);

// Suscriptor
const yoel = {
    compartir: function(oferta) {
        console.log('Yoel Dice: Excelente Oferta! ' + oferta);
    }
}

const jula = {
    interesa: function(oferta) {
        console.log('Jula Dice: Me interesa la oferta de ' + oferta);
    }
}


udemy.obtenerOfertas(yoel.compartir);
udemy.obtenerOfertas(jula.interesa);
udemy.nuevoCurso();
udemy.cancelarOfertas(jula.interesa);
udemy.nuevoCurso();

facebook.obtenerOfertas(jula.interesa);
facebook.obtenerOfertas(yoel.compartir);
facebook.nuevoAnuncio();