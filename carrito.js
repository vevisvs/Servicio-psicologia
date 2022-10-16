
    const cart = document.querySelector('cart');

    /* carrito de compras */
    const carrito = []

    /* escuchar evento del boton y agregar servicio al carrito de compras */
    const btnAgregarAlCarrito = document.querySelectorAll('.btnPush-carrito');

    const escucharEventoBoton = () => {
        btnAgregarAlCarrito.forEach((element, i) => {
            element.addEventListener('click', () => {
                pushearServicioAlCarrito(servicios[i].id)
            })
    })
    }
    escucharEventoBoton();


    /* agregar productos al array de carrito */
    const pushearServicioAlCarrito = (idServicio) => {
        const seleccionado = servicios.find((item => {
            return item.id === idServicio
        }))

        if(!!seleccionado){
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

