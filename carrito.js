const cart = document.querySelector('cart');

/* carrito de compras */
const carrito = []

/* escuchar evento del boton y agregar servicio al carrito de compras */
let btnAgregarAlCarrito = document.querySelectorAll('.btnPush-carrito');

const escucharEventoBoton = () => {
    btnAgregarAlCarrito.forEach((element => {
    element.addEventListener('click', () => {
        pushearServicioAlCarrito(element.nombre)
    })
}))
}
escucharEventoBoton();


/* agregar productos al carrito */
const pushearServicioAlCarrito = (nombreDeServicio) => {
    let seleccionado = servicios.find((item => {
        item.nombre === nombreDeServicio
    }))

    if(seleccionado !== undefined || seleccionado !== null){
        carrito.push(seleccionado)
        console.table(carrito)
    }
}

/* vaciar el carrito */
const btnVaciarCarrito = document.createElement('button');
const text = document.createTextNode('Vaciar carrito');
btnVaciarCarrito.classList.add('btnVaciarCarrito');
cart.appendChild(btnVaciarCarrito);
btnVaciarCarrito.appendChild(text);

btnVaciarCarrito.addEventListener('click', () => {
    vaciarElCarrito();
})

const vaciarElCarrito = () => {
    carrito.clear();
}



