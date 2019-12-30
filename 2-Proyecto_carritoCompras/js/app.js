// Variables
const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

// Listeners

cargarEventListeners();

function cargarEventListeners() {
    // Dispara cuando se presiona "Agregar Carrito"
    cursos.addEventListener('click', comprarCarrito);

    // Cuando se elimina un curso del carrito
    carrito.addEventListener('click', eliminarCurso);

    // Al vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

    // Al cargar documento mostrar localStorage
    document.addEventListener('DOMContentLoaded', leerLocalStorage);
}


// Funciones

// Función que añade curso a carrito
function comprarCarrito(e) {
    e.preventDefault();
    // Delegation para agregar carrito
    if(e.target.classList.contains("agregar-carrito")) {
        const curso = e.target.parentElement.parentElement;
        // Enviamos curso seleccionado para tomar sus datos
        leerDatosCurso(curso);
    }
}

// Lee datos del curso
function leerDatosCurso(curso) {
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id')
    }
    insertarCarrito(infoCurso);
}

// Muestra curso seleccionado en carrito
function insertarCarrito(curso) {
    const row = document.createElement('tr');
    row.innerHTML = 
    `
        <td>
            <img src="${curso.imagen}" width="100">
        </td>
        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td>
            <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
        </td>
    `;
    listaCursos.appendChild(row);
    guardarCursoLocalStorage(curso);
}

// Elimina el curso del carrito en el DOM
function eliminarCurso(e) {
    e.preventDefault();
    
    let curso,
        cursoId;
    if(e.target.classList.contains('borrar-curso') ) {
        e.target.parentElement.parentElement.remove()
        curso = e.target.parentElement.parentElement;
        cursoId = curso.querySelector('a').getAttribute('data-id');
    }

    eliminarCursoLocalStorage(cursoId);
}

// Elimina los cursos del carrito en el DOM
function vaciarCarrito() {
    // forma lenta
    /*listaCursos.innerHTML = '';*/
    // forma rápida (recomendada)
    while(listaCursos.firstChild) {
        listaCursos.removeChild(listaCursos.firstChild);
    }
    // Vaciar localStorage
    vaciarLocalStorage();
    
    return false; // Para que no se cierre la ventana del carrito cuando le damos al botón
}

// Almacena cursos en el carrito a localStorage

function guardarCursoLocalStorage(curso) {
    let cursos;

    // toma valor de array con datos de localStorage o vacío
    cursos = obtenerCursosLocalStorage();
    
    // cursos seleccionado se agrega al array
    cursos.push(curso);

    localStorage.setItem('cursos', JSON.stringify(cursos));
}

// Comprueba que haya elementos en LocalStorage
function obtenerCursosLocalStorage() {
    let cursosLS;

    //comprobamos si hay algo en localStorage
    if(localStorage.getItem('cursos') === null) {
        cursosLS = [];
    } else {
        cursosLS = JSON.parse( localStorage.getItem('cursos') );
    }
    return cursosLS;
}

// Imprime cursos de localStorage en carrito

function leerLocalStorage() {
    let cursosLS;
    cursosLS = obtenerCursosLocalStorage();
    
    cursosLS.forEach(function(curso) {
        const row = document.createElement('tr');
        row.innerHTML = 
        `
            <td>
                <img src="${curso.imagen}" width="100">
            </td>
            <td>${curso.titulo}</td>
            <td>${curso.precio}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
            </td>
        `;
        listaCursos.appendChild(row);
    })
}

//Elimina curso de Local Storage

function eliminarCursoLocalStorage(curso) {
    let cursosLS;
    // Obtengo array de cursos
    cursosLS = obtenerCursosLocalStorage();
    // Itero comparando ID de curso borrado con el de LocalStorage
    cursosLS.forEach(function(cursoLS, index) {
        if (cursoLS.id === curso) {
            cursosLS.splice(index, 1);
        }
    });
    // Añado array actual a localStorage
    localStorage.setItem('cursos', JSON.stringify(cursosLS));
}

// Elimina todos los cursos de localStorage
function vaciarLocalStorage() {
    localStorage.clear();
}