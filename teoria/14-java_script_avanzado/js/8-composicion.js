// Composición

const obtenerNombre = (info) => ({
    mostrarNombre() {
        console.log(`Nombre: ${info.nombre}`);
    }
});

const guardarEmail = (info) => ({
    email(email) {
        console.log(`Guardando email en: ${info.nombre}`);
        info.email = email;
    }
});

const obtenerEmail = (info) => ({
    mostrarEmail(email) {
        console.log(`Email: ${info.email}`);
        info.email = email;
    }
});

const obtenerEmpresa = (info) => ({
    mostrarEmpresa() {
        console.log(`Empresa: ${info.empresa}`);
    }
});

const obtenerPuesto = (info) => ({
    mostrarPuesto() {
        console.log(`Puesto: ${info.puesto}`);
    }
});

function Cliente(nombre, email, empresa) {
    let info = {
        nombre, 
        email, 
        empresa
    }
    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info),
        obtenerEmpresa(info)
    )
}

function Empleado(nombre, email, puesto) {
    let info = {
        nombre, 
        email, 
        puesto
    }
    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info),
        obtenerPuesto(info)
    )
}

const cliente = Cliente('Jula', null, 'Udemy');
cliente.mostrarNombre();
cliente.email('jula@gmail.com')
cliente.mostrarEmail();
cliente.mostrarEmpresa();

const empleado = Empleado('Yoel', null, 'Front end Developer')
empleado.mostrarNombre();
empleado.email('yoel@gmail.com')
empleado.mostrarEmail();
empleado.mostrarPuesto();
