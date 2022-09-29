// 1er ENTREGA: algoritmo condicional, algoritmo de ciclo Y simulador interactivo

/* Reserva de servicios psicológicos: */

let mensajeConfirm;

const bienvenida = () => {

    alert("Hola, mi nombre es Vevis Villalobos y soy Psicóloga");
    mensajeConfirm = confirm("¿Te interesa conocer cuáles son los servicios que brindo?");
}
bienvenida();


const confirmacionReserva = () => {
    let confirmacion = confirm("¿Desea proceder con la reserva?");
    if(confirmacion){
        let dia = prompt("Ingrese el día que quiere reservar: ");
        let mes = prompt("Ingrese el nombre del mes: ");
        alert("Su reserva para el día " + dia + " de " + mes + " se ha procesado correctamente. Debe procesar su pago en un máximo de 2 horas, de lo contrario, su reserva será cancelada");
    } else {
        alert("Esperamos verle en otra ocasión. Hasta luego.");
    }
}

const mostrarServicios = () => {
    if (mensajeConfirm){

            const servicios = ['Terapia para adultos', 'Terapia de parejas', 'Terapia para adolescentes', 'Terapia para niños'];

            alert("Estos son los servicios que podrás encontrar aquí: ")
            
            for(let i = 0; i < servicios.length; i++){
                alert(servicios[i])
            }
        
            let respuestaUsuario = parseInt(prompt(`Ingrese el numero que coincida con el servicio que desea adquirir: 
                                        \n 0: ${servicios[0]}
                                        \n 1: ${servicios[1]}
                                        \n 2: ${servicios[2]}
                                        \n 3: ${servicios[3]}`));
            
            
            alert(`Has seleccionado el servicio número ${respuestaUsuario}`); 

            confirmacionReserva();

    } else {
        function despedida () {
        alert("Ha sido un placer. Nos vemos en otra oportunidad. Adiós.")
        }
        despedida();
        return;
    } 
} 
mostrarServicios();

















