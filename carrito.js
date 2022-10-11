/* Carrito de compra */


/* array de objetos: Visualizar nombre servicio + precio de c/u */
const listado = [
        { id: 0, nombre: 'Terapia para adultos', precio: 1500 },
        { id: 1, nombre: 'Terapia para parejas', precio: 2500 },
        { id: 2, nombre: 'Terapia para adolescentes', precio: 1800 },
        { id: 3, nombre: 'Terapia para niños', precio: 2000 }
];


/*const visualizarListado = () => {
    for( key in listado){
        if(listado.hasOwnProperty(key)){
            const elemento = listado[key];
            
        }
    }
    alert("Listado de servicios y precios: " + '\n' + JSON.stringify(listado)) 
}
visualizarListado(); */



/* modificar carrito de compras */

let carrito = []

/* agregar servicio al carrito */
const agregarServicio = (nombreServicio) => {
    let agregado = prompt("¿Cuál servicio desea agregar?")
    carrito.push(agregado)

    let confirmacion = prompt("¿Desea agregar otro servicio a su carrito?")


}
agregarServicio();



/* eliminar servicio del carrito */

const eliminarServicio = (nombreServicio) => {
    let eliminado = prompt("¿Cual servicio desea eliminar?")
    
    if(carrito.includes(eliminado)){
        let indice = carrito.indexOf(eliminado);
        carrito.splice(indice, 1)
    } else {
        alert("El producto ingresado no se encuentra en tu carrito de compras. Intentalo de nuevo.")
    }
}
eliminarServicio(); 


/* visualizar carrito */

let pagarReserva = document.querySelector('.pagarReserva');

pagarReserva.addEventListener('click', () => {
    const visualizarCarrito = () => {
    console.log(carrito.join(" - "));
}
    visualizarCarrito();
})



