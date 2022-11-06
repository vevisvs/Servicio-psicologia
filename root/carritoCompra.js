/*//carrito de compras, que se va a cargar con la info enviada de servicios.js:
let carrito = []

//funcion para agregar carrito al LocalStorage:
const guardarCarritoEnStorage = () => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}


//funcion para obtener datos del localStorage:
const buscarCarritoEnStorage = () => {
    return localStorage.getItem('carrito')
}


//selectores del DOM:
const contenedorCarrito = document.getElementById('container-carrito');
const btnEliminar = document.querySelectorAll('.btn-eliminar');
const btnVaciarCarrito = document.getElementById('btn-vaciar');


//renderizar carrito, luego de pushear los items en el:
const renderizarCarrito = ()=> {
    buscarCarritoEnStorage();
    if(containerItems){
        for(item in carrito) {
        let divProducto = document.createElement('div');
        // divProducto.classList.add('divProducto')
        divProducto.innerHTML += `<p>Nombre: ${item.nombre}</p>
                                    <p>Precio: ${item.precio}</p>
                                    <button id=${item.id} class="btn-eliminar">`;

        contenedorCarrito.appendChild(divProducto);
        guardarCarritoEnStorage();
        }
    } else {
        console.log("carrito no encontrado")
    }
}


const eliminarItemDelCarrito = () => {
    btnEliminar.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            e.preventDefault();
            const itemEliminado = carrito.find(( item ) => item.id === e.target.id)
            const index = carrito.indexOf(itemEliminado) //busco el indice del elemento para poder borrarlo
            carrito.splice(index, 1)
            renderizarCarrito() //actualizo el carrito
        })
    })
}

*/