//carrito de compras, que se va a cargar con la info enviada de servicios.js:
const carrito = []

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
// const row = document.querySelector('.row');


//renderizar carrito, luego de pushear los items en el:
const renderizarCarrito = ()=> {
    carrito.forEach(item => {
        const divProducto = document.createElement('div');
        divProducto.classList.add('divProducto')
        divProducto.innerHTML += `<p>Nombre: ${item.nombre}</p>
                                    <p>Precio: ${item.precio}</p>
                                    <button id=${item.id} class="btn-eliminar">`
        contenedorCarrito.appendChild(divProducto);
    })
}


const eliminarItemDelCarrito = () => {

}



//crear estructura del carrito:
//fila:
const crearFilaYCol = (carrito) => {
    for(let i = 0; i < carrito; i += 4){
        contenedorCarrito.innerHTML += `<div class="row"><div class="col" id="c${i}"></div>
                            <div class="col"id="c${i + 1}"></div><div class="col"id="c${i + 2}">
                            </div><div class="col"id="c${i + 3}"></div></div>`;
    }
}





