
let usuario_loguiado = JSON.parse(localStorage.getItem('logiado'))

let titulo = document.querySelector("h1").textContent += usuario_loguiado.nombre


// agregar produbto template

class Carrito {
    constructor() {
        this.productosCrema = JSON.parse(localStorage.getItem('carrito')) || [];
    }

    agregarCarrito(productosCrema) {
        this.productosCrema.push(productosCrema);
        localStorage.setItem('carrito', JSON.stringify(this.productosCrema));
    }
}

let carrito_instancia = new Carrito();
let carrito_compras = carrito_instancia.productosCrema;

let contenido = document.querySelector(".carrito");

carrito_compras.forEach((mostrar_productos) => {
    carrito_template(mostrar_productos, contenido);
});

console.log(carrito_compras)


// funcion carrito

function carrito_template (producto, contenedor) {
    let clon = document.querySelector("template").content.cloneNode(true);
        clon.querySelector("img").src = producto.foto;
        clon.querySelector("h2").textContent = producto.nombre;
        clon.querySelector("h3").textContent += producto.tamano;
        clon.querySelector("h4").textContent += producto.precio;

        let mas = clon.querySelector(".mas");

        mas.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('hola');
        });

        let menos = clon.querySelector(".menos");

        menos.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('hola');
        });

        contenedor.append(clon);
}

