const divContactoForm = document.querySelector('contacto-form');
const formButton = document.querySelector('form-button');

//se crea un array de errores vacio
let errores = []

//se procede a la validacion del formulario al activarse el evento
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario-contacto").addEventListener('submit', validarFormulario); 
});

function validarFormulario(e) {
        e.preventDefault();

        let nombre = document.getElementById('nombre').value;
        if(nombre == null && nombre.length <= 3){
            errores.push('Debe ingresar su nombre completo')
        }

        let email = document.getElementById('email').value;
        let expresion = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;
        if(!expresion.test(email)){
            errores.push('Dirección de correo electrónico inválida')
        }

        let pais = document.getElementById('paisresidencia').selectedIndex;
        if(pais == null || pais == 0){
            errores.push('Debe seleccionar su pais de residencia')
        }

        if(errores.length == 0){
            this.submit();
            form.reset(); //se envia el formulario y se resetea 
        } else {
            alert(errores.join(" - "));
        }
}

