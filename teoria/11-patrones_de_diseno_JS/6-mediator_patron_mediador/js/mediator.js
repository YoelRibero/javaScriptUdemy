// El mediador define objetos ya localizados para un objetivo específico

const Vendedor = function(nombre) {
    this.nombre = nombre;
    this.sala = null;
}

const Comprador = function(nombre) {
    this.nombre = nombre;
    this.sala = null;
}

Vendedor.prototype = {
    oferta: function(articulo, precio) {
        console.log(`Tenemos el siguiente artículo ${articulo}, iniciamos en ${precio}`);
    },
    vendido: function(comprador) {
        console.log(`Vendido a ${comprador} (Sonido de mazo)`);
    }
}

Comprador.prototype = {
    oferta: function(mensaje, comprador) {
        console.log(`${comprador.nombre}: ${mensaje}`)
    }
}

// Mediador que comunicará al objeto Vendedor con el Comprador
const Subasta = function() {
    let compradores = {};
    return {
        registrar: function(usuario) {
            compradores[usuario.nombre] = usuario;
            usuario.sala = this;
            // console.log(compradores);
        }
    }
}

// Instanciar las clases

const yoel = new Comprador('Yoel');
const jula = new Comprador('Jula');
const santi = new Comprador('Santiago');

const vendedor = new Vendedor('Vendedor');

const subasta = new Subasta();
subasta.registrar(yoel);
subasta.registrar(jula);
subasta.registrar(santi);

// const subasta2 = new Subasta();
// subasta2.registrar(yoel);

vendedor.oferta('Mustang 1966', 3000)
yoel.oferta(3500, yoel);
santi.oferta(4000, santi);
yoel.oferta(5000, yoel);
jula.oferta(6000, jula);
vendedor.vendido(jula.nombre);
