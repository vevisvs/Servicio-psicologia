/* creacion de la clase Servicio con su constructor */
class Servicio {
    id;
    imagen = [];
    nombre;
    precio;
    constructor(id, imagen, nombre, precio){
        this.id = id;
        this.imagen = imagen;
        this.nombre = nombre;
        this.precio = precio;
    }
}

/*crear array de servicios */
const servicios = []


/* agregar los objetos servicios al array */
function agregarServicios() {
    let terapiaAdultos = new Servicio (0, '.root/svg/terapia-adultos.jpg','Terapia para adultos', 1500);
    let terapiaParejas = new Servicio (1, '.root/svg/terapia-parejas.jpg', 'Terapia de parejas', 2500);
    let terapiaAdolescentes = new Servicio (2, '.root/svg/terapia-adolescentes.jpg', 'Terapia para adolescentes', 1800);
    let terapiaNinos = new Servicio (3, '.root/svg/terapia-ninos.png', 'Terapia para niños', 2000);
    
    servicios.push(terapiaAdultos, terapiaParejas, terapiaAdolescentes, terapiaNinos);
}
agregarServicios();


/* agregar propiedad de imagen al array de objetos*/
// servicios[0].imagen = '../svg/terapia-adultos.jpg'
// servicios[1].imagen = '../svg/terapia-parejas.jpg'
// servicios[2].imagen = '../svg/terapia-adolescentes.jpg'
// servicios[3].imagen = '../svg/terapia-ninos.png'



/* eliminar servicio del array */
const eliminarServicio = () => {
    let eliminado = prompt("¿Cual servicio desea eliminar?")
        
    if(servicios.includes(eliminado)){
        let indice = servicios.indexOf(eliminado);
        servicios.splice(indice, 1)
    } else {
        alert("El producto ingresado no se encuentra en tu carrito de compras. Intentalo de nuevo.")
    }
}
eliminarServicio(); 


/* mostrar card de servicios dinamicamente */
let mostrarCardsServicios = () => {
    let cardsServicios = document.querySelector('#servicios-section');

    let fragmento = document.createElement('div');

    for(serv in servicios){
        fragmento.innerHTML += `<div class="card">
                                    <img src="${serv.imagen}">
                                    <h2>${serv.nombre}</h2>
                                    <span>${serv.precio}</span>
                                    <button>Añadir a carrito</button>
                                </div>`
    }
    cardsServicios.appendChild(fragmento);
}
mostrarCardsServicios();




