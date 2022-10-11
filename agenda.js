/* reservas */

let carritoForm = document.querySelector('.carrito-form');
let form = document.querySelector('form');
let agendarCita = document.querySelector('.agendarCita'); 
let buttonReserva = document.querySelector('button');

//se crea un array de errores vacio
let errores = []

//se procede a la validacion del formulario al activarse el evento
buttonReserva.addEventListener('submit', validarFormulario);

    function validarFormulario(e) {
        e.preventDefault();

        let nombre = document.getElementById('nombre').value;
        if(nombre == null && nombre.length < 3){
            errores.push('Error en el campo nombre')
        }

        let email = document.getElementById('email').value;
        let expresion = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;
        if(!expresion.test(email)){
            errores.push('Dirección de correo electrónico inválido')
        }

        let pais = document.getElementById('paisorigen').selectedIndex;
        if(pais == null || pais == 0){
            errores.push('Debe seleccionar su pais de residencia')
        }

        let agenda = document.getElementById('agenda').selectedIndex;
        if(agenda == null || agenda == 0){
            errores.push('Debe seleccionar una fecha para poder realizar la reserva')
        }

        let fechaReserva = document.getElementById('fecha').value;
        let expresionFecha = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[1-9]|2[1-9])$/;
        if(!expresionFecha.test(fechaReserva)){
            errores.push('Debe seleccionar un formato de fecha')
        }

        if(errores.length == 0){
            SubmitEvent = true;
            form.reset(); //se envia el formulario y se resetea 
        } else {
            alert(errores);
        }
    }
    
