/* Carrito de compra */

/* capturar servicio elegido del form y agregarlo al carrito de compras */
let capturarServicioDelForm = () => {
    let servicioCapturado = new Servicio(agenda.value);
    console.log(servicioCapturado);
    agregarServicioAlCarrito();
}

let carrito = []

let agregarServicioAlCarrito = () => {
    carrito.push(servicioCapturado)
}



/* eliminar servicio del carrito */




/* visualizar carrito */
let pagarReserva = document.querySelector('.pagarReserva');

pagarReserva.addEventListener('click', () => {
    const visualizarCarrito = () => {
    console.log(carrito.join(" - "));
}
    visualizarCarrito();
})



