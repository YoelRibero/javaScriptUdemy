// Tenremos todas las funciones en una sola instancia

const alumnos = {
    // Todos los alumnos
    listAlumnos: [],

    // Obtener un alumno
    get: function(id) {
        // console.log(id);
        return this.listAlumnos[id];
    },

    // Crear un alumno
    crear: function(datos) {
        console.log(datos)
        this.listAlumnos.push(datos);
    },

    // Listar todos los alumnos
    listado: function () {
        return this.listAlumnos;
    }
}

const infoAlumno = {
    nombre: 'Yoel',
    edad: 23
}

const infoAlumno2 = {
    nombre: 'Juan',
    edad: 20
}

alumnos.crear(infoAlumno);
alumnos.crear(infoAlumno2);

const listado = alumnos.listado();

console.log(listado);

const alumno = alumnos.get(0);

console.log(alumno);
