// 1er ENTREGA: algoritmo condicional, algoritmo de ciclo, simulador interactivo

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
            
            if(respuestaUsuario === '' || respuestaUsuario === null){
                alert("Error. Debes ingresar una respuesta")
            } if(respuestaUsuario >= 4){
                alert("Servicio no válido. Inténtalo de nuevo.")
                return;
            }
            
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



/* 2da ENTREGA: Incluir métodos de arrays */
/* array de objetos: Visualizar nombre servicio + precio de c/u */
let listarPrecios = () => {

    const listado = [
        { idServicio: 0, nombre: 'Terapia para adultos', precio: 1500 },
        { idServicio: 1, nombre: 'Terapia para parejas', precio: 2500 },
        { idServicio: 2, nombre: 'Terapia para adolescentes', precio: 1800 },
        { idServicio: 3, nombre: 'Terapia para niños', precio: 2000 }
    ];
    const visualizarLista = listado.map((elemento => {
        elemento.nombre + elemento.precio
    }))
}
listarPrecios();


/* cargar carrito */
//a corregir!
let carritoCompra = [];
let cantidadDeServicios = 4;

let cargarCarrito = () => {
    let entrada = prompt("Ingrese en su carrito de compras el servicio a adquirir: ") //pendiente por validar si existe y agregarlo
    carritoCompra.push(entrada.toLowerCase().trim());  //metodos de array

    confirm("¿Deseas seguir agregando servicios a tu carrito de compras?");

    if(confirm){
        do{
            let entrada = prompt("Ingrese en su carrito de compras el/los servicio/s a adquirir: ")
            carritoCompra.push(entrada.toLowerCase().trim());  
        } while( cantidadDeServicios < 5 )
    } 
    alert("Carrito cerrado")

    alert("Su carrito de compras contiene: " + carritoCompra.join(" | "))
}
cargarCarrito();



/*  modificar carrito de compras */
let eliminarProducto = () => {

}








