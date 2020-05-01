const autos = [
	{
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2012,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A4', year: 2018, precio: 40000, puertas: 4, color: 'Negro', transmision: 'automatico' },
	{
		marca: 'Ford',
		modelo: 'Mustang',
		year: 2015,
		precio: 20000,
		puertas: 2,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A6', year: 2010, precio: 35000, puertas: 4, color: 'Negro', transmision: 'automatico' },
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2016,
		precio: 70000,
		puertas: 4,
		color: 'Rojo',
		transmision: 'automatico'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2015,
		precio: 25000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'Chevrolet',
		modelo: 'Camaro',
		year: 2018,
		precio: 60000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{ marca: 'Ford', modelo: 'Mustang', year: 2019, precio: 80000, puertas: 2, color: 'Rojo', transmision: 'manual' },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2017,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A3', year: 2017, precio: 55000, puertas: 2, color: 'Negro', transmision: 'manual' },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2012,
		precio: 25000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2018,
		precio: 45000,
		puertas: 4,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2019,
		precio: 90000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Ford', modelo: 'Mustang', year: 2017, precio: 60000, puertas: 2, color: 'Negro', transmision: 'manual' },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2015,
		precio: 35000,
		puertas: 2,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2018,
		precio: 50000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2017,
		precio: 80000,
		puertas: 4,
		color: 'Negro',
		transmision: 'automatico'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2018,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A4', year: 2016, precio: 30000, puertas: 4, color: 'Azul', transmision: 'automatico' }
];

// Antes para recorrer un array

// for (let i = 0; i < autos.length; i++) {
	// console.log(autos[i].marca);
	// Si quiero los autos que su precio sea mayor a x
	// if (autos[i].precio > 40000) {
	// 	console.log(autos[i]);
	// }
	// if (autos[i].puertas === 4) {
	// 	console.log(autos[i]);
	// }
	//if (autos[i].color === 'Negro') {
	// 	console.log(autos[i]);
	// }
// }

// Ahora tenemos los array methods para simplificar este trabajo

// forEach -> Se ejecuta una vez por cada elemento del arreglo
// let resultado = [];
// autos.forEach(auto => {
	// console.log(auto);
	// if (auto.color === 'Rojo') {
	// 	resultado.push(auto);
	// }
// });
// console.log(resultado); // Como se ve el código queda bastante grande para lo que hace, es recomendabnle usar forEach cuando sólo necesitamos recorrer un arraglo, si queremos hacer algo como en el ejemplo es mejor utilizar filter().

// map -> Map retorna un arreglo nuevo, esa es la principal diferencia entre forEach y map(), si probamos el mismo ejemplo con forEach nos devuelve undefined
// let resultado = autos.map(auto => {
// 	return auto;
	// No es buena práctica
	// if (auto.marca === 'BMW') {
	// 	return auto;
	// }
	// Esto devolverá un array con todos los autos e imprimirá undefined en los autos que no cumplan con la condición
// });
// console.log(resultado);

// filter -> Crea un arreglo basado en una condición
let resultado1 = autos.filter(auto => {
	return auto.marca === 'BMW'; // No es necesario poner if para hacer la condición, es el método más flexible y más utilizado
});
let resultado2 = autos.filter(auto => auto.color === 'Rojo');
let resultado3 = autos.filter(auto => auto.year === 2018);
let resultado4 = autos.filter(auto => auto.year > 2015);
let resultado5 = autos.filter(auto => auto.precio > 50000);
let resultado6 = autos.filter(auto => auto.puertas === 2);
let resultado7 = autos.filter(auto => auto.transmision === 'manual');
let resultado8 = autos.filter(auto => auto.year >= 2015 && auto.year <= 2017);
let resultado9 = autos.filter(auto => auto.year >= 2016 && auto.marca === 'BMW');
// console.log(resultado9);


// find -> find retorna el primer elemento que encuentra en el arreglo con la condición. Funcionan las mismas condiciones que filter.
// let resultado = autos.find(auto => auto.marca === 'BMW');
// console.log(resultado);

// reduce -> Toma todos los valores y devuelve un valor único. Recibe dos parámetros(valorPrevio, valorNuevo).
// Cual es la suma de todos los utos que tenemos
// let resultado = autos.reduce((total, auto) => total + auto.precio, 0); // Total va a ser el valor del precio anterior y auto.precio va a ser el valor a sumar al precio anterior, cuando arranco total = 0 y auto.precio será el valor del precio del primer auto en el array, el resultado de esa suma será el valor deñ total en la siguiente iteración y el valor de auto.precio será el valor del precio del segundo auto en el array y así sucesivamente. 0 es el valor del inicio, si pones 100 total va a comenzar en 100.
// console.log(`Si se venden todos los autos tendríamos ena ganancia de USD${resultado}`);

// some -> Evalúa una condición y nos retorna true or false
let resultado14 = autos.some(auto => auto.marca === 'Ferrari');
let resultado15 = autos.some(auto => auto.marca === 'BMW');
let resultado16 = autos.some(auto => auto.precio > 1000000);

console.log(resultado14); // False - No hay autos de marca Ferrari.
console.log(resultado15); // True - Hay algun auto BMW, no sabes cual pero sabemos que alguno hay
console.log(resultado16); // False - no hay autos con precio mayor a 1000000