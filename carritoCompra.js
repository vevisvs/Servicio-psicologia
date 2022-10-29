const carrito = []

//funcion para agregar carrito al LocalStorage:
const guardarCarritoEnStorage = () => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}


//funcion para obtener datos del localStorage:
const buscarCarritoEnStorage = () => {
    return localStorage.getItem('carrito')
}

