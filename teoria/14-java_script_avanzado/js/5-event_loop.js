// JavaScript event loop

console.log('Yo me mostraré primero');
setTimeout(() => {
    console.log('Yo me mostraré segundo');
}, 0)
console.log('Yo me mostraré tercero');
setTimeout(() => {
    console.log('Yo me mostraré cuarto');
}, 0)
new Promise(res => {
    res('Yo soy un promise')
}).then(console.log);
console.log('Yo me mostraré quinto');

// Event Loop le da prioridad a lo que está en el stack (en este caso los console, y luego imprime lo que está en el Queue (en este caso lo primero que se ejecuta del Queue es el promise y después el setTimeOut))


//Biblografía: https://developer.mozilla.org/es/docs/Web/JavaScript/EventLoop o https://www.youtube.com/watch?v=8aGhZQkoFbQ
