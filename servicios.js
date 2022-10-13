/* creacion de la clase Servicio con su constructor */
class Servicio {
    constructor(id, imagen, nombre, precio){
        this.id = id;
        this.imagen = imagen;
        this.nombre = nombre;
        this.precio = precio;
    }
}

/*crear array de servicios */
const servicios = []


/* crear los objetos servicios y cargarlos al array */
function generarServicios() {
    let terapiaAdultos = new Servicio (0, 'root/img/terapia-adultos.jpg','Terapia para adultos', 1500);
    let terapiaParejas = new Servicio (1, 'root/img/terapia-parejas.jpg', 'Terapia de parejas', 2500);
    let terapiaAdolescentes = new Servicio (2, 'root/img/terapia-adolescentes.jpg', 'Terapia para adolescentes', 1800);
    let terapiaNinos = new Servicio (3, 'root/img/terapia-ninos.png', 'Terapia para niños', 2000);
    
    servicios.push(terapiaAdultos, terapiaParejas, terapiaAdolescentes, terapiaNinos);
}
generarServicios();


/* eliminar servicio del array */
let eliminar = prompt("Ingrese el id del servicio a eliminar")
if(eliminar > 3){
    alert("Ingrese un id de servicio válido")
} else {
    servicios.forEach((item, index, servicios) => {
        if(item.id == eliminar){ 
            servicios.splice(index, 1 )
        }      
    } 
)
}
console.log(servicios);



/* mostrar card de servicios dinamicamente */
const mostrarCardsServicios = () => {
    let cardsServicios = document.querySelector('#servicios-section');

    let fragmento = document.createElement('div');
    fragmento.classList.add('cards-section');

    for(const servicio of servicios){
        fragmento.innerHTML += `<div class="card">
                                    <img src="${servicio.imagen}">
                                    <h2>${servicio.nombre}</h2>
                                    <p>${servicio.precio} $</p>
                                    <button>Añadir a carrito</button>
                                </div>`
    }
    cardsServicios.appendChild(fragmento);
}
mostrarCardsServicios();




