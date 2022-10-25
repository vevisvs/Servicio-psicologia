const divContactoForm = document.querySelector('contacto-form');
const formButton = document.querySelector('form-button');

//se crea un array de errores vacio
let errores = []

//se procede a la validacion del formulario al activarse el evento
let formulario = document.getElementById("formulario-contacto");

document.addEventListener("DOMContentLoaded", function() {
    formulario.addEventListener('submit', validarFormulario); 
});

function validarFormulario(e) {
    e.preventDefault();

    let nombre = document.getElementById('nombre').value;
    if(nombre === null || nombre === undefined || nombre.length <= 3){
        errores.push('Debe ingresar su nombre completo')
    }

    let email = document.getElementById('email').value;
    const expresion = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!email.match(expresion)) { 
        errores.push('Dirección de correo electrónico inválida')
    }

    let pais = document.getElementById('paisresidencia').selectedIndex;
    if(pais === null || pais === 0){
        errores.push('Debe seleccionar su pais de residencia')
    }

    if(errores.length === 0){
        formulario.submit();
        formulario.reset(); //se envia el formulario y se resetea 
    } else {
        alert(errores.join(" - "));
        formulario.reset();
    }

    errores = []
}


formButton.onclick = () => {
    localStorage.setItem('Nombre', nombre);
    localStorage.setItem('Email', email);
    localStorage.setItem('Pais', pais);
}

