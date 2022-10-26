
/* creacion de la clase Servicio con su constructor */
// class Servicio {
//     constructor(id, imagen, nombre, precio){
//         this.id = id;
//         this.imagen = imagen;
//         this.nombre = nombre;
//         this.precio = precio;
//     }
// }

// /*crear array de servicios */
// const servicios = []


// /* crear los objetos servicios y cargarlos al array */
// function generarServicios() {
//     let terapiaAdultos = new Servicio (0, 'root/img/terapia-adultos.jpg','Terapia para adultos', 1500);
//     let terapiaParejas = new Servicio (1, 'root/img/terapia-parejas.jpg', 'Terapia de parejas', 2500);
//     let terapiaAdolescentes = new Servicio (2, 'root/img/terapia-adolescentes.jpg', 'Terapia para adolescentes', 1800);
//     let terapiaNinos = new Servicio (3, 'root/img/terapia-ninos.png', 'Terapia para niños', 2000);
    
//     servicios.push(terapiaAdultos, terapiaParejas, terapiaAdolescentes, terapiaNinos);
// }
// generarServicios();


/* mostrar card de servicios dinamicamente */

// let cardsServicios = document.querySelector('#servicios-section');

// const mostrarCardsServicios = () => {
//     let fragmento = document.createElement('div');
//     fragmento.classList.add('cards-section');

//     {
//         fragmento.innerHTML += `<div class="card">
//                                     <img src="${servicio.imagen}">
//                                     <h2>${servicio.nombre}</h2>
//                                     <p>${servicio.precio} $</p>
//                                 </div>`
//     }
//     cardsServicios.appendChild(fragmento);
// }
// mostrarCardsServicios();



// module.export = {Servicio};

document.addEventListener('DOMContentLoaded', () => {
    pintarItemsEnContenedor(datos);
})

const containerItems = document.querySelector('.items-container');
const templateServicios = document.getElementById('servicios-section');

//accedo a la info del json para imprimir cada item:
let template = '';
function pintarItemsEnContenedor (datos) {
    
    // template.classList.add('templateItem');
console.log(template)
    datos.forEach(item => {
        template += `<div class="carta">
                                    <h5 class="card-title">${item.nombre}</h5>
                                    <p class="card-text">$<span>${item.precio}</span></p>
                                    <button class="btn-comprar" id=${item.id}>Añadir al carrito</button>
                                </div>`
    });
    
}
containerItems.appendChild(template);

// const btnComprar = document.querySelectorAll('.btn-comprar');
// console.log(btnComprar)

// const agregarItemAlCarrito = () => {
//     btnComprar.addEventListener('click', () => {
//         btnComprar.forEach(elemento => {

//         })
//         idSeleccionado
//         if(idSeleccionado == item.id){

//         }
//     })
// }

// localStorage.setItem('servicioElegido', JSON.stringify())


// switch , boton btnComprar ,  tiene atributo, mandar al local storage