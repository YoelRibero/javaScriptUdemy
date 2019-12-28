//Variables

// Variable donde almacenamos los tweets
const listaTweets = document.getElementById('lista-tweets');


// Event Listeners

//Aca llamo a la función de listeners
eventListeners();

//En la siguiente función estan los lisners que vamos a utilizar
function eventListeners() {
    //Cuando se envía el formulario
    document.querySelector('#formulario').addEventListener('submit', agregarTweet);

    //Borrar tweets
    listaTweets.addEventListener('click', borrarTweet);

    //Contenido cargado
    document.addEventListener('DOMContentLoaded', localStorageLista);
}


// Funciones

function templateTweet(itemTweet) {
    //Crear botón de eliminar
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';

    //Crear elemento y añadir contenido a la lista
    const li = document.createElement('li');
    li.innerText = itemTweet;
    //Añade botón de borrar a tweet
    li.appendChild(botonBorrar);
    //Añade el tweet a la lista
    listaTweets.appendChild(li);
}

//Añadir tweet del formulario
function agregarTweet(e) {
    e.preventDefault();
    // Leer valor de textarea
    const tweet = document.getElementById('tweet').value;

    // Template tweet
    templateTweet(tweet);

    //Añadir a localStorage
    agregarTweetLocalStorage(tweet);
}

//Elimina tweet del DOM
function borrarTweet(e) {
    e.preventDefault();
    if(e.target.className === 'borrar-tweet') {
        e.target.parentElement.remove();
        borrarTweetLocalStorage(e.target.parentElement.innerText);
    }
}

//Mostrar datos de LocalStorage en la lista
function localStorageLista() {
    let tweets;
    tweets = obtenerTweetsLocalStorage();
    
    //Recorre tweets ya creados y guardados en localStorage
    tweets.forEach(function(tweet) {
        //Template tweet
        templateTweet(tweet);
    })
}

//Agregar tweet a localStorage

function agregarTweetLocalStorage(tweet) {
    let tweets;
    tweets = obtenerTweetsLocalStorage();

    //Añadir nuevo tweet
    tweets.push(tweet);
    // Convertir de string a arreglo para localStorage
    localStorage.setItem('tweets', JSON.stringify(tweets) ); 
}

// Comprobar que haya elementos en localStorage, retorna array
function obtenerTweetsLocalStorage() {
    let tweets;
    //Revisa valores de localStorage
    if(localStorage.getItem('tweets') === null){
        tweets = [];
    } else {
        tweets = JSON.parse( localStorage.getItem('tweets') );
    }
    return tweets;
}

//Eliminar tweet de localStorage

function borrarTweetLocalStorage(tweet) {
    let tweets, tweetBorrar;
    //Quita el ultimo elemento de la cadena que nos devuelve(x), ya que lo único que me interesa es obtener la palabra del tweet. Method substring
    tweetBorrar = tweet.substring(0, tweet.length - 1);

    tweets = obtenerTweetsLocalStorage();

    tweets.forEach(function(tweet, index) {
        if(tweetBorrar === tweet) {
            tweets.splice(index, 1);
        }
    })

    localStorage.setItem('tweets', JSON.stringify(tweets));
}