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


## Pasos para instalar y configurar Webpack

* Luego de instalar NodeJS (versión 6) y npm creamos la carpeta del proyecto, en este caso será (webpack-learning)
* En la consola nos paramos en el proyecto
* Ejecuto comando ``` $ npm init ```
* Allí pregunta configuración, la mayoría de las cosas quedan como estan, se puede agregar descripción nombre de autor, repositorio de git, etc. Esto nos crea el file package.json, ese archivo tiene todas las configuraciones que acabamos de hacer en el npm init.
* Ahora intalar Webpack con el comando ``` $ npm install webpack --save-dev ``` (iniciar consola en admin). Esto nos genera como dependencia webpack en el archivo ``` package.json ```. También nos genera la carpeta ``` node_modules ``` (recomendable tener esta carpeta en el .gitignore)
* Instalar otra dependencia llamada webpack cli con ``` npm install --save-dev webpack-cli ```, como se ve también se puede instalar así una dependencia. También queda agregado en package.json como dependencia.
* Notar que en las dependencias nos dice la versión de cada dependencia, lo cual hace que todo el equipo esté actualizado.
* Se crea la carpeta src que tendrá los archivos de entrada del proyecto. Agregamos un archivo index.js con un console.log de prueba.
* Creamos el index.html y enlazamos el bundle que crea webpack, el que va a compilar todos nuestros archivos, este estará en la capeta dist (es la que tiene los archivos de salida) y el nombre que le da al js es main.js. Entonces el script queda ``` <script src="dist/main.js"></script> ```
* Ahora ejecutamos webpack para que compile ``` $ node_modules/.bin/webpack src/index.js ``` La primer parte es el ejecutable de webpack y como segundo parámetro pasamos el archivo de entrada.
* Ahora tenemos la carpeta ``` dist ``` con el archivo ``` main.js ``` dentro. Si abrimos el index.html en el navegador deberíamos ver la prueba en consola. Si miras el archivo main.js de la carpeta dist se ve el código compilado de webpack.
* Ahora, todos estos pasos los podemos configurar para tener control de lo que queremos que webpack compile.
* Creamos el archivo ``` webpack.config.js ``` así se debe llamar para que webpack sepa que es un archivo de configuración.
* Dentro del archivo tendremos la configuración para especificar la entrada, la salida, etc. 
* La entrada la configuramos con ``` entry: './src/index.js' ``` 
si tenemos más de un archivo de entrada lo ponemos como arreglo.
* La salida la configuramos con ``` output: { filename: 'bundle.js', path: path.join(__dirname, './dist') } ```. Para decirle donde queremos que se exporte debemos importar el modulo path con ``` const path = require('path') ```
* Ahora si corremos el comando ``` $ node_modules/.bin/webpack ``` sin el nombre de entrada porque ya lo tenemos en la configuración y nos creará la carpeta ``` dist ``` con el archivo ``` bundle.js ```
* Es engorroso escribir ``` $ node_modules/.bin/webpack ``` cada vez que queremos ejecutar webpack, crearemos un shortcode para acortar esto.
* En ``` package.json ``` en la sección scripts podemos configrar esto. dentro del object ponemos como clave el nombre que le damos al comando en este caso será ``` build ``` y como valor ponremos ``` webpack --mode development ``` si en consola ponemos ``` npm run build ``` no ejecuta webpack. El ``` --mode development ``` es para decirle a la consola que estamos en modo de desarrollo y nos tire warning de que no le estamos pasando el modo.
* **Babel** nos crea una versión de nuestro proyecto compatible con todos los navegadores.
* Para instalar babel ponemos en consola ``` $ npm install --save-dev @babel/core @babel/preset-env @babel/register babel-loader ``` Los loaders nos permiten agregar archivos estáticos (images, js, css) e integrarlos con webpack, hay loaders para Sass, css, etc.
* Crear archivo .babelrc  para las configuraciones de babel. 
* Configuramos los ``` "presets" ``` y utilizamos el presets más genérico, colocamos como valor ``` ["@babel/preset-env"] ``` utilizamos ese presets cuando webpack detecte se está corriendo código de babel.
* Hay que configurar en webpack el preset. En el archivo de configuración de webpack, después de output, configuramos los modulos que vamos a utilizar para eso agregamos ``` module: {  } ``` podemos agregar imágenes, archivos sass, css dentro de module a trvés de los loaders.
* Definimos las reglas que vamos a utilizar ``` rules: [{  }] ```, allí definimos todos los archivos que vamos a utilizar.
* Agregamos para que tome todos los archivos ``` .js ``` con ``` test: /\.j$/ ``` pero excluímos a la carpeta ``` /node_modules ```, y le decimos que utilice el loader ``` babel-loader ```. Con eso le decimos que todos archivos .js pasen por el babel-loader, el busca el archivo ``` .babelrc ``` y mira en que preset(version) queremos compilar nuestros archivos .js
* Si vemos en el navegador el código de js que llega ya está compilado a través de babel
* En ``` package.json ``` configuramos otro script que va a estar mirando nuestros cambios ese script va a ser ``` "watch" ``` y como valor le pasamos ``` webpack --watch --mode development ``` si ponemos ``` npm run watch ``` va a estar mirando nuestros cambios contínuamente.
* ``` watch ``` detecta los cambios y recarga el navegador cuando hay un cambio.
* El ``` --watch ``` también lo podemos encontrar como ``` --w ```
* Para importar nuestro css debemos instalar los paquetes de ``` style-loader ``` y ``` css-loader ``` con ``` $ npm install --save-dev style-loader css-loader ```
* Una vez instalado en el package.json tendremos estas dependencias
* Debemos configurar en el ``` webpack.config.js ``` las reglas para la importación de los css.
* Dentro de ``` rules ``` creamos otro objeto, en el test se lo aplicamos a todos los archivos ```.css``` con ```/\.css$/```, y usaremos los loaders que instalamos ```loader: 'style-loader'``` y ```{loader: 'css-loader'}```.
* Podemos agregar tantas reglas como queramos
* Creamos el archivo ```styles.css``` en la carpeta css y lo importamos en el archivo ```index.js``` con ```import '../css/styles.css'``` y nuestro index.html tomará nuestro estilo.
* Si queremos podemos importar también archivos ```sass```. 
* Debemos instalar las dependencias con ```$ npm install --save-dev sass-loader```. En el archivo de configuración de webpack ponemos la regla para importar sass, es muy parecida a la de css lo único que ponemos que tome todos los archivos ```scss``` y le agregamos el loader ```sass-loader```
* También debemos instalar la dependencia node-sass tanto global como en el proyecto, esto lo hacemos con ```$ npm install -g node-sass``` para instalarla de manera global y ```$ npm install --save-dev node-sass``` para instalarlo en el proyecto.
* Con ```-g``` instalamos el paquete de manera global, en toda la computadora, por eso le agregamos eso, con ```--save-dev``` instalamos la dependencia solamente en el proyecto que estamos construyendo.
* Creamos un archivo sass donde queramos y lo importamos en el ```index.js``` y funciona.
* Podemos crear múltiples bundles. Dividiramos nuestros index en dos uno se llamará ```index.html``` y el otro ```nosotros.html``` y los mismo con los js.
* En webpack config crearemos otra entrada, una se llamará ```index``` y hará referencia al ```index.js``` y la otra se llamará ```nosotros``` y hará referencia a ```nosotros.js```.
* En ```filename``` lo configuramos como ```'[name].bundle.js'```, para que cada bundle tome el nombre de su archivo js.
* Para que no se repita código común para ambos bundles creamos un archivo común que tendrá el código necesario para ambos bundles
* En el archivo de configuración de webpack, después de modules, crearemos una optimización, utilizamos ```chunks``` que es una funcionalidad de webpack para esto mismo, como test le pasamos que queremos que agregue todos los archivos del ```node_modules```, esto nos crea un file ```common.bundle.js``` con todo el código común de ambos bundles. 
* Esto es muy útil cuando por ej, cargamos una librería, que queremos que la cargue una sola vez y no la esté cargando cada vez que cargamos un js. 
* **IMPORTANTE**: importar este archivo en los html
* Podemos instalar ```webpack-dev-server``` para estar escuchando cambios y actualizando desde un servidor propio de webpack. Instalamos el paquete con ```$ npm install --save-dev webpack-dev-server```
* En el archivo de configuración de webpack creamos la confiración para devServer. En ```contentBase``` le indicamos la carpeta que queremos que escuche. Como compress le pasamos true y el puerto también lo elegimos nosotros.
* También hay que configurar en el ```package.json``` en la parte de script le configuramos el nombre que tendrá para llamarlo en la consola, en este caso será ```dev``` y luego le pasamos el comando ```webpack-dev-server --mode development --open``` open es para que abra el navegador en ese puerto. Ejecutamos ```$ npm run dev``` y se ejecuta.
* Debemos mover el HTML para la carpeta dist así nos toma a esos archivos.
* Podemos manejar los archivos .html con webpack. Instalamos el plugin con el comando ```$ npm install --save-dev html-webpack-plugin```.
* En el configurador de webpack importamos el ```HtmlWebpackPlugin```. Después dentro de la sección ```plugins``` agregamos esta configuración como ```new HtmlWebpackPlugin```.
* Corremos para que compile los bundles vemos que en la carpeta ```dist``` nos crea el ```index.html```, pero esto lo podemos controlar mediante parámetros en el ```HtmlWebpackPlugin```.
* Creamos un archivo ```index.html``` en la carpeta src y dentro de los paréntesis creamos un objeto y le pasamos nuestro archivo html y la carpeta donde lo tendrá que buscar.
* Esto nos da la ventaja de que cuando hacemos un cambio en nuestro archivo ```index.html``` se recarga la páginca y compila los cambios, con esto tenemos el recargado de la página en todos nuestros archivos, tanto js, sass como html.
* Podemos configurar nuestro título de página en el configurador y pasarselo en el html, se realiza agregando ```title``` en el configurador y en el html se lo pasamos de esta manera ```<%= htmlWebpackPlugin.options.title %>```. Volver a correr el ```$ npm run build```
* Podemos crear otro html simplemente copiando el mismo código de antes en el configurador de webpack y le pasamos el nombre y la carpeta de nuestro archivo.
