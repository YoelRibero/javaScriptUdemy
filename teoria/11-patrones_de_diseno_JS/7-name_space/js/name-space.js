// La idea es crear un objeto global alrededor de toda la aplicación y agregar todas funciones y métodos en el mismo lugar, en lugar de crear múltiples funciones y objetos. jQuery es un ejemplo de este patrón. ej, $.jdjdj;

const restaurApp = {};

// Tendremos un objeto gigante que almacenará todas nuestras variables, la creamos con su name-space

restaurApp.platillos = [
    {
        platillo: 'Pizza',
        precio: 25,
    },
    {
        platillo: 'Hamburguesa',
        precio: 20,
    },
    {
        platillo: 'Pancho',
        precio: 15,
    }
];

// Funciones
restaurApp.funciones = {
    ordenar: id => {
        console.log(`Tu platillo: ${restaurApp.platillos[id].platillo} se está preparando`);
    },
    agregarPlatillo: (platillo, precio) => {
        const nuevo = {
            platillo,
            precio
        }
        restaurApp.platillos.push(nuevo);
    },
    mostrarMenu: platillos => {
        console.log(`Bienvenido a nuestro menú: `);
        platillos.forEach((platillo, index) => {
            console.log(`${index}: ${platillo.platillo} $${platillo.precio}`)
        });
    }
}

console.log(restaurApp);
const { platillos } = restaurApp;
restaurApp.funciones.mostrarMenu(platillos);
restaurApp.funciones.ordenar(1);

restaurApp.funciones.agregarPlatillo('Pastel', 30);
restaurApp.funciones.mostrarMenu(platillos);
