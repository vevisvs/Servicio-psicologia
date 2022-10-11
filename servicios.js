class Servicios {
    constructor(id, nombre, precio){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

const terapiaAdultos = new Servicios (0, 'Terapia para adultos', 1500);
const terapiaParejas = new Servicios (1, 'Terapia de parejas', 2500);
const terapiaAdolescentes = new Servicios (2, 'Terapia para adolescentes', 1800);
const terapiaNinos = new Servicios (3, 'Terapia para niños', 2000);

