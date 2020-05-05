# Webpack

* Es un bundler (paquete) de módulos para aplicaciones JavaScript Modernas
* Procesa la aplicación y mapea todas las dependencias de un módulo, con esto crea uno o varios paquetes o bundlers.

### 4 Conceptos son necesarios conocer para entender mejor webpack:

* Entry (entrada)
* Output (salida)
* Loaders (cargadores)
* Plugins (complementos)

### Entry

_Un punto de entrada que especfica que módulo debe utilizar webpack para comenzar a crear la gráfica de dependencias, webpack se encargará de saber que dependencias tiene este módulo._

_Por lo normal el punto de entrda y la configuración se guardan en un archivo, aunque en la versión 4 ya no es necesario._

### Output

_La salida le dirá a webpack en que parte debe almacenar el bundle que se ha creado._

_Normalmente la entrada está en una carpeta llamada src/ y la salida a una carpeta llamada dist/_

### Loaders

_Webpack solo entiende archivos JavaScript, pero con los loaders puedes cargar otros formatos como sass, less, imágenes, html._

_Importar archivos css es algo que gulp o grunt no puede hacer y que le da mucho mayor poder a webpack sobre estas herramientas._

_Loaders tiene 2 palabras clave:_

* **Test:** que le dice al archivo webpack que archivos deben ser transformados
* **use:** que le dice al archivo webpack que loader estamos utilizando para este archivo

### Plugins

_Los loaders nos permiten utilizar distintos tipos de módulos y otros formatos. Pero los plugins realizan otro tipo de tareas tales como optimizar el bundle, administración avanzada de los assets._

_Un plugin se instala vía NPM y se importa al archivo webpack con la palabra require()_

* Para trabajar con webpack es necesario instalar NPM y NodeJS.

* Webpack no es soportado en IE8 y navegadores anteriores.


## Pasos para instalar Webpack

* Luego de instalar NodeJS (versión 6) y npm creamos la carpeta del proyecto, en este caso será (webpack-learning)
* En la consola nos paramos en el proyecto
* Ejecuto comando ~~~ $ npm init ~~~
* Allí pregunta configuración, la mayoría de las cosas quedan como estan, se puede agregar descripción nombre de autor, repositorio de git, etc. Esto nos crea el file package.json, ese archivo tiene todas las configuraciones que acabamos de hacer en el npm init.
* Ahora intalar Webpack con el comando ~~~ $ npm install webpack --save-dev ~~~ (iniciar consola en admin). Esto nos genera como dependencia webpack en el archivo ~~~ package.json ~~~. También nos genera la carpeta ~~~ node_modules ~~~ (recomendable tener esta carpeta en el .gitignore)
* Instalar otra dependencia llamada webpack cli con ~~~ npm install --save-dev webpack-cli ~~~, como se ve también se puede instalar así una dependencia. También queda agregado en package.json como dependencia.
* Notar que en las dependencias nos dice la versión de cada dependencia, lo cual hace que todo el equipo esté actualizado.
* Se crea la carpeta src que tendrá los archivos de entrada del proyecto. Agregamos un archivo index.js con un console.log de prueba.
* Creamos el index.html y enlazamos el bundle que crea webpack, el que va a compilar todos nuestros archivos, este estará en la capeta dist (es la que tiene los archivos de salida) y el nombre que le da al js es main.js. Entonces el script queda ~~~ <script src="dist/main.js"></script> ~~~
* Ahora ejecutamos webpack para que compile ~~~ $ node_modules/.bin/webpack src/index.js ~~~ La primer parte es el ejecutable de webpack y como segundo parámetro pasamos el archivo de entrada.
* Ahora tenemos la carpeta ~~~ dist ~~~ con el archivo ~~~ main.js ~~~ dentro. Si abrimos el index.html en el navegador deberíamos ver la prueba en consola. Si miras el archivo main.js de la carpeta dist se ve el código compilado de webpack.
* Ahora, todos estos pasos los podemos configurar para tener control de lo que queremos que webpack compile.
* Creamos el archivo ~~~ webpack.config.js ~~~ así se debe llamar para que webpack sepa que es un archivo de configuración.
* Dentro del archivo tendremos la configuración para especificar la entrada, la salida, etc. 
* La entrada la configuramos con 
~~~ 
entry: './src/index.js 
~~~ 
si tenemos más de un archivo de entrada lo ponemos como arreglo.
* La salida la configuramos con ~~~ output: { filename: 'bundle.js', path: path.join(__dirname, './dist') } ~~~. Para decirle donde queremos que se exporte debemos importar el modulo path con ~~~ const path = require('path') ~~~
* Ahora si corremos el comando ~~~ $ node_modules/.bin/webpack ~~~ sin el nombre de entrada porque ya lo tenemos en la configuración y nos creará la carpeta ~~~ dist ~~~ con el archivo ~~~ bundle.js ~~~
* Es engorroso escribir ~~~ $ node_modules/.bin/webpack ~~~ cada vez que queremos ejecutar webpack, crearemos un shortcode para acortar esto.
* En ~~~ package.json ~~~ en la sección scripts podemos configrar esto. dentro del object ponemos como clave el nombre que le damos al comando en este caso será ~~~ buld ~~~ y como valor ponremos ~~~ webpack --mode development ~~~ si en consola ponemos ~~~ npm run build ~~~ no ejecuta webpack. El ~~~ --mode development ~~~ es para decirle a la consola que estamos en modo de desarrollo y nos tire warning de que no le estamos pasando el modo.

