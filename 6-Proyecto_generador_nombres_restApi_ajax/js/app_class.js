class API {
    async getNames() {
        const data = await fetch('https://uinames.com/api/');
        const dataResult = await data.json();
        return dataResult;
    }
}

class Interfaz {
    
    async namesList() {
        const names = new API;
        const namesList = await names.getNames();
        debugger;
        console.log(namesList); 
    } 
}

document.querySelector('#generar-nombre').addEventListener('submit', cargarNombres);

function cargarNombres(e) {
    e.preventDefault();
    const ui = new Interfaz();
    ui.namesList();
}