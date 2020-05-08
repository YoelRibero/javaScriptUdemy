# Storage en el Cliente

* Guardar datos en el navegador con JavaScript
* No usar Cookies
* Se recomienda almacenar pocos datos, nada que sea muy importante o crítico, como tarjetas de créditos, contraseñas, etc.

### Opciones

* Web Storage (sencillo) -> Local Storage y Session Storage
* IndexedDB (complejo) -> IndexedDB

#### IndexedDB

* Puede almacenar grandes cantidades de datos estructurados, incluyendo archivos.
* Utiliza indexes para hacer más rápido el acceso a los datos
* Recomendado para grandes cantidades de datos 

### Características

* Es una base de datos completa
* Puede guardar Arreglos, Objetos, imágenes y Videos.
* Datos estructurados con una llave
* Datos con llave -> valor
* Asíncrono

### Desventajas

* No se puede sincronizar con el backend
* No se puede utilizar en modo privado. (al cerrar se pierde todo)
* El límite de datos lo pone el navegador
* Si el usuario limpia el browser los datos se van a perder