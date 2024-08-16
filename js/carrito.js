// Nombre del usuario
let usuario_loguiado = JSON.parse(localStorage.getItem('loguiado'));
let titulo = document.querySelector("h1").textContent += usuario_loguiado.nombre;

//carrito
let productosCrema = JSON.parse(localStorage.getItem('carrito')) || [];

let cartas = document.querySelector(".carrito");
productosCrema.forEach((mostrar) => {
    carrito_template (mostrar, cartas)
});


// cartas del carrito
function carrito_template(producto, contenedor) {
    let clon = document.querySelector("template").content.cloneNode(true);
    clon.querySelector("img").src = producto.foto;
    clon.querySelector("h2").textContent = producto.nombre;
    clon.querySelector("h3").textContent += producto.tamano;
    clon.querySelector("h4").textContent += producto.precio.toFixed(2);
    clon.querySelector("h5").textContent += producto.cantidad;
    
    

    let mas = clon.querySelector(".mas");
    mas.addEventListener('click', (e) => {
        e.preventDefault();
        producto.cantidad += 1 ;
        producto.precio = producto.precio + (producto.precio / (producto.cantidad - 1)) ;
        localStorage.setItem('carrito', JSON.stringify(productosCrema));
        actualizarCarrito(contenedor);
    });

    let menos = clon.querySelector(".menos");
    menos.addEventListener('click', (e) => {
        e.preventDefault();
        if (producto.cantidad > 1) {
            producto.cantidad -= 1;
            producto.precio = producto.precio - (producto.precio / (producto.cantidad + 1)) ;
        } else {
            for (let i = 0 ; i < productosCrema.length; i++){
                productosCrema = productosCrema.filter(p => p.id !== producto.id);
            }
        }
    localStorage.setItem('carrito', JSON.stringify(productosCrema));
    actualizarCarrito(contenedor);
    });

    contenedor.append(clon);
}

// actualizar
function actualizarCarrito(contenedor) {
    contenedor.innerHTML = '';

    productosCrema.forEach((mostrar_productos) => {
        carrito_template(mostrar_productos, contenedor);
    });

    //precio total
    let total = 0
    for (let i = 0 ; i < productosCrema.length; i++){
        total += productosCrema[i].precio;
    }

    contenedorTotal = document.querySelector(".total-precio");
    contenedorTotal.textContent = total.toFixed(2);
}



