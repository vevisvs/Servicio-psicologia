//de esta forma, cuando se cargue el DOM, se renderizan las funciones:
document.addEventListener('DOMContentLoaded', () => {
    pintarItemsEnContenedor(datos);
    agregarItemAlCarrito();
})


// Selectores del DOM:
const containerItems = document.querySelector('.containerItems');
const templateServicios = document.getElementById('servicios-section');


//accedo a la info del json para imprimir cada item:
function pintarItemsEnContenedor (datos) {
    // template.classList.add('templateItem');
    datos.forEach(item => {
        containerItems.innerHTML+= `<div class="card">
                                        <h5 class="card-title">${item.nombre}</h5>
                                        <p class="card-text">$<span>${item.precio}</span></p>
                                        <button id=${item.id} type="button" class="btn-comprar">Añadir al carrito</button>
                                    </div>`
    });
}


//envío los item seleccionados al carrito:
const agregarItemAlCarrito = () => {
    
    const btnComprar = document.querySelectorAll('.btn-comprar');
    btnComprar.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            e.preventDefault();
            //id del boton presionado:
            const botonID = e.target.id;
            //encontrar servicio relacionado a ese botonId y guardarlo en variable:
            const servicioSeleccionado = datos.find(item => item.id == botonID);
            carrito.push(servicioSeleccionado)
            console.log(carrito)
        }
    )}
)}



