//importo el json
import datos from './items.json' assert {type: 'json'}

const containerItems = document.getElementById('items-container')
let templates = document.querySelector('#items-template')
let cartas = document.querySelectorAll('carta')


//accedo a la info del json para imprimir cada item:
function pintarItemsEnContenedor (datos) {
    datos.forEach(item => {
        templates.innerHTML += `<div class="carta">
                                    <h5 class="card-title">${item.nombre}</h5>
                                    <p class="card-text">$<span>${item.precio}</span></p>
                                    <button class="btn-comprar">Comprar</button>
                                </div>`
    });
    containerItems.appendChild(templates);
}
pintarItemsEnContenedor(datos);


//creo un carrito:
let carrito = []

const containerCarrito = document.querySelector('container-carrito');
const btnComprar = document.querySelector('btn-comprar');
const eliminar = document.createElement('span')
const agregar = document.createElement('span')


//escucho el evento del botonComprar, y agrego el servicio (a comprar) en el carrito:
btnComprar.addEventListener('submit', (e) => {
    e.preventDefault();
    //agregar elemento seleccionado al carrito y generar una fila en la tabla:
    let itemSeleccionado = Servicio[servicio[i]]
    let nuevoItemEnCarrito = new item(0, nombre.value, cantidad.value, precio);
    carrito.push(nuevoItemEnCarrito)
    containerCarrito.appendChild(carrito)

    const crearFilaEnTabla = () => {
        let fila = document.createElement("tr")
        let posicion = carrito.indexOf(item)
        let cuadricula = document.createElement("td")
        cuadricula.innerText = item.nombre;

        fila.appendChild(cuadricula)

        cuadricula = document.createElement("td")
        cuadricula.innerText = item.cantidad;
        fila.appendChild(cuadricula)

        cuadricula.document.createElement("td")
        cuadricula.innerText = item.precio;
        fila.appendChild(cuadricula)
    }

    localStorage.setItem("carrito", JSON.stringify(carrito))

})



agregar.addEventListener('', () => {

})



//guardar carrito en el local storage:
// btnComprar.onClick = () => {
//     localStorage.setItem('carrito', JSON.stringify(item));
// }


//verifico si ya existe un carrito en el localstorage:
function buscarCarritoEnLocalStorage () {
    // verficio si existe un carrito guardado en el LocalStorage:
    if (localStorage.getItem('carrito') !== null) {
        // si es asi, pido la info guardada allí:
        carrito = JSON.parse(localStorage.getItem('carrito'));
    }
}
buscarCarritoEnLocalStorage();


//eliminar un producto del carrito:



//eliminar info del local storage:
localStorage.clear()