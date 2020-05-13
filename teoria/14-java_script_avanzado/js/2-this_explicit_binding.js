// This con Explicit Binding

function persona(el1, el2) {
    console.log(`Hola soy ${this.nombre} y me gusta el ${el1} y el ${el2}`)
}

const informacion = {
    nombre: 'Yoel',
    trabajo: 'Front End Developer'
}

const generosMusicales = ['Trap', 'Reggaeton'];

// Explicit binding con call, cuando pasas arreglo se deben colocar todas las posiciones
persona.call(informacion, generosMusicales[0], generosMusicales[1]);

// Explicit binding con .apply, ( si toma un arreglo )
persona.apply(informacion, generosMusicales);

// Explicit binding .bind (igual a call pero crea una nueva funcion)
const nuevaFn = persona.bind(informacion, generosMusicales[0], generosMusicales[1]);
nuevaFn();
