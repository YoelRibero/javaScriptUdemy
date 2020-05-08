let DB;

// Selectores de la interfaz
const form = document.querySelector('form'),
    nombreMascota = document.querySelector('#mascota'),
    nombreCliente = document.querySelector('#cliente'),
    telefono = document.querySelector('#telefono'),
    fecha = document.querySelector('#fecha'),
    hora = document.querySelector('#hora'),
    sintomas = document.querySelector('#sintomas'),
    citas = document.querySelector('#citas'),
    headingAdministra = document.querySelector('#administra');

// Esperar por el DOM Ready
document.addEventListener('DOMContentLoaded', () => {
    // crear base de datos -> Toma nombre y versión como prámetro
    let crearDB = window.indexedDB.open('citas', 1);

    // Si hay error enviar a consola
    crearDB.onerror = function() {
        console.log('Hubo un error');
    }
    // Si todo está bien entonces mostrar en consola y asignar DB.
    crearDB.onsuccess = function() {
        // Asignar a la base de datos
        DB = crearDB.result;

        mostrarCitas();
    }

    // Este método solo corre una vez y es ideal para crear el schema de la DB
    crearDB.onupgradeneeded = function(e) {
        // El evento es la misma base de datos
        let db = e.target.result;
        
        // Definir el objectstore, toma 2 parámetros, el nombre de la base de datos y las opciones
        // keypath es el índice de la DB
        let objectStore = db.createObjectStore('citas', { keyPath: 'key', autoIncrement: true });

        // Crear índices y campos de la DB, 3 parámetros, nombre, keypath, opciones
        objectStore.createIndex('mascota', 'mascota', { unique: false });
        objectStore.createIndex('cliente', 'cliente', { unique: false });
        objectStore.createIndex('telefono', 'telefono', { unique: false });
        objectStore.createIndex('fecha', 'fecha', { unique: false });
        objectStore.createIndex('hora', 'hora', { unique: false });
        objectStore.createIndex('sintomas', 'sintomas', { unique: false });
    }
    // Cuando el formulario se envía
    form.addEventListener('submit', agregarDatos)

    function agregarDatos(e) {
        e.preventDefault();
        const nuevaCita = {
            mascota: nombreMascota.value,
            cliente: nombreCliente.value,
            telefono: telefono.value,
            fecha: fecha.value,
            hora: hora.value,
            sintomas: sintomas.value
        }
        
        // en IndexedDB se utilizan las transacciones
        let transaction = DB.transaction(['citas'], 'readwrite'); 
        let objectStore = transaction.objectStore('citas');
        let peticion = objectStore.add(nuevaCita);
        console.log(peticion);
        peticion.onsuccess = () => {
            form.reset();
        }
        transaction.oncomplete = () => {
            console.log('Cita agregada');
            mostrarCitas();
        }
        transaction.onerror = () => {
            console.log('Hubo un error');
        }
    }

    function mostrarCitas() {
        // Limpiar citas anteriores
        while(citas.firstChild) {
            citas.removeChild(citas.firstChild);
        }

        // creamos un object store
        let objectStore = DB.transaction('citas').objectStore('citas');
        // esto retorna una petición
        objectStore.openCursor().onsuccess = function(e) {
            // Cursor se va a ubicar en el registro indicado para acceder a los datos
            let cursor = e.target.result;
            
            if (cursor) {
                let citaHTML = document.createElement('li');
                citaHTML.setAttribute('data-cita-id', cursor.value.key);
                citaHTML.classList.add('list-group-item');
                citaHTML.innerHTML = `
                    <p class="font-weight-bold">Mascota: <span class="font-weight-normal">${cursor.value.mascota}</span></p>
                    <p class="font-weight-bold">Cliente: <span class="font-weight-normal">${cursor.value.cliente}</span></p>
                    <p class="font-weight-bold">Telefono: <span class="font-weight-normal">${cursor.value.telefono}</span></p>
                    <p class="font-weight-bold">Fecha: <span class="font-weight-normal">${cursor.value.fecha}</span></p>
                    <p class="font-weight-bold">Hora: <span class="font-weight-normal">${cursor.value.hora}</span></p>
                    <p class="font-weight-bold">Síntomas: <span class="font-weight-normal">${cursor.value.sintomas}</span></p>
                `;
                // btn borrar
                const botonBorrar = document.createElement('button');
                botonBorrar.classList.add('borrar', 'btn', 'btn-danger');
                botonBorrar.innerHTML = `<span aria-hidden="true">x</span> borrar`;
                botonBorrar.onclick = borrarCita;
                citaHTML.appendChild(botonBorrar);
                // append en el padre
                citas.appendChild(citaHTML);
                // Consultar los próximos registros
                cursor.continue();
            } else {
                if(!citas.firstChild) {
                    // Cuando no hay registros
                    headingAdministra.textContent = 'Agrega citas para comenzar';
                    let listado = document.createElement('p')
                    listado.classList.add('text-center');
                    listado.textContent = 'No hay registro';
                    citas.appendChild(listado);
                } else {
                    headingAdministra.textContent = 'Administra tus Citas';
                }
                
            }
        }
    }

    function borrarCita(e) {
        let citaID = Number(e.target.parentElement.getAttribute('data-cita-id'));
        // en IndexedDB se utilizan las transacciones
        let transaction = DB.transaction(['citas'], 'readwrite'); 
        let objectStore = transaction.objectStore('citas');
        let peticion = objectStore.delete(citaID);
        transaction.oncomplete = () => {
            e.target.parentElement.parentElement.removeChild(e.target.parentElement);
            console.log(`Se eliminó la cita con el id ${citaID}`);
            if(!citas.firstChild) {
                // Cuando no hay registros
                headingAdministra.textContent = 'Agrega citas para comenzar';
                let listado = document.createElement('p')
                listado.classList.add('text-center');
                listado.textContent = 'No hay registro';
                citas.appendChild(listado);
            } else {
                headingAdministra.textContent = 'Administra tus Citas';
            }
        }
    }
});

