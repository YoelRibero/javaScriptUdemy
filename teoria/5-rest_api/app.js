const cargarPost = document.querySelector('#cargar');

cargarPost.addEventListener('click', function() {
    // Crear objeto
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

    xhr.onload = function() {
        if (this.status === 200) {
            const respuesta = JSON.parse(this.responseText);
            let contenido = '';
            respuesta.forEach(post => {
                contenido +=
                `
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                `
            });
            document.querySelector('#listado').innerHTML = contenido;
        }
    }
    xhr.send();
})