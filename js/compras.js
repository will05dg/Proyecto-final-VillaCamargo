const productosCrema = [ 
    {
        id: 0,
        nombre: "Crema Hidratante",
        foto: "../image/crema1.jpg",
        descripcion: "Crema ligera y no grasosa que proporciona hidratación profunda.",
        tamano: "30ml",
        precio: 10
    },
    {
        id: 1,
        nombre: "Crema Hidratante",
        foto: "../image/crema2.jpg",
        descripcion: "Crema ligera y no grasosa que proporciona hidratación profunda.",
        tamano: "50ml",
        precio: 15
    },
    {
        id: 2,
        nombre: "Crema Hidratante",
        foto: "../image/crema3.jpg",
        descripcion: "Crema ligera y no grasosa que proporciona hidratación profunda.",
        tamano: "100ml",
        precio: 25
    },
    {
        id: 3,
        nombre: "Crema Antiarrugas",
        foto: "../image/crema1.jpg",
        descripcion: "Crema avanzada para la reducción de arrugas y líneas finas.",
        tamano: "30ml",
        precio: 20
    },
    {
        id: 4,
        nombre: "Crema Antiarrugas",
        foto: "../image/crema2.jpg",
        descripcion: "Crema avanzada para la reducción de arrugas y líneas finas.",
        tamano: "50ml",
        precio: 30
    },
    {
        id: 5,
        nombre: "Crema Antiarrugas",
        foto: "../image/crema3.jpg",
        descripcion: "Crema avanzada para la reducción de arrugas y líneas finas.",
        tamano: "100ml",
        precio: 50
    },
    {
        id: 6,
        nombre: "Crema para Manos",
        foto: "../image/crema1.jpg",
        descripcion: "Crema nutritiva que suaviza y protege las manos secas.",
        tamano: "30ml",
        precio: 5
    },
    {
        id: 7,
        nombre: "Crema para Manos",
        foto: "../image/crema2.jpg",
        descripcion: "Crema nutritiva que suaviza y protege las manos secas.",
        tamano: "50ml",
        precio: 8
    },
    {
        id: 8,
        nombre: "Crema para Manos",
        foto: "../image/crema3.jpg",
        descripcion: "Crema nutritiva que suaviza y protege las manos secas.",
        tamano: "100ml",
        precio: 12
    },
    {
        id: 9,
        nombre: "Crema para el Cuerpo",
        foto: "../image/crema1.jpg",
        descripcion: "Crema rica y emoliente para todo el cuerpo.",
        tamano: "30ml",
        precio: 12
    },
    {
        id: 10,
        nombre: "Crema para el Cuerpo",
        foto: "../image/crema2.jpg",
        descripcion: "Crema rica y emoliente para todo el cuerpo.",
        tamano: "50ml",
        precio: 20
    },
    {
        id: 11,
        nombre: "Crema para el Cuerpo",
        foto: "../image/crema3.jpg",
        descripcion: "Crema rica y emoliente para todo el cuerpo.",
        tamano: "100ml",
        precio: 35
    },
    {
        id: 12,
        nombre: "Crema para el Rostro",
        foto: "../image/crema1.jpg",
        descripcion: "Crema diaria que hidrata y protege la piel del rostro.",
        tamano: "30ml",
        precio: 15
    },
    {
        id: 13,
        nombre: "Crema para el Rostro",
        foto: "../image/crema2.jpg",
        descripcion: "Crema diaria que hidrata y protege la piel del rostro.",
        tamano: "50ml",
        precio: 25
    },
    {
        id: 14,
        nombre: "Crema para el Rostro",
        foto: "../image/crema3.jpg",
        descripcion: "Crema diaria que hidrata y protege la piel del rostro.",
        tamano: "100ml",
        precio: 40
    },
    {
        id: 15,
        nombre: "Crema de Noche",
        foto: "../image/crema1.jpg",
        descripcion: "Crema reparadora que trabaja mientras duermes.",
        tamano: "30ml",
        precio: 18
    },
    {
        id: 16,
        nombre: "Crema de Noche",
        foto: "../image/crema2.jpg",
        descripcion: "Crema reparadora que trabaja mientras duermes.",
        tamano: "50ml",
        precio: 28
    },
    {
        id: 17,
        nombre: "Crema de Noche",
        foto: "../image/crema3.jpg",
        descripcion: "Crema reparadora que trabaja mientras duermes.",
        tamano: "100ml",
        precio: 45
    },
    {
        id: 18,
        nombre: "Crema con Protección Solar",
        foto: "../image/crema1.jpg",
        descripcion: "Crema hidratante con protección solar de amplio espectro.",
        tamano: "30ml",
        precio: 12
    },
    {
        id: 19,
        nombre: "Crema con Protección Solar",
        foto: "../image/crema2.jpg",
        descripcion: "Crema hidratante con protección solar de amplio espectro.",
        tamano: "50ml",
        precio: 20
    },
    {
        id: 20,
        nombre: "Crema con Protección Solar",
        foto: "../image/crema3.jpg",
        descripcion: "Crema hidratante con protección solar de amplio espectro.",
        tamano: "100ml",
        precio: 35
    },
    {
        id: 21,
        nombre: "Crema para Ojos",
        foto: "../image/crema1.jpg",
        descripcion: "Crema suave para reducir ojeras y líneas finas alrededor de los ojos.",
        tamano: "30ml",
        precio: 10
    },
    {
        id: 22,
        nombre: "Crema para Ojos",
        foto: "../image/crema2.jpg",
        descripcion: "Crema suave para reducir ojeras y líneas finas alrededor de los ojos.",
        tamano: "50ml",
        precio: 18
    },
];

//contador

//saludo a usuario

let usuario_loguiado = JSON.parse(localStorage.getItem('logiado'))

let titulo = document.querySelector("h1").textContent += usuario_loguiado.nombre


//carito

class carrito_dato {
    constructor(nombre, tamano, precio, foto) {
        this.foto = foto;
        this.nombre = nombre;
        this.tamano = tamano ;
        this.precio = precio;
    }
}

let carrito_array = []



// funcion

function agregarProducto(producto, contenedor) {
    let clon = document.querySelector("template").content.cloneNode(true);
        clon.querySelector("img").src = producto.foto;
        clon.querySelector("h2").textContent = producto.nombre;
        clon.querySelector("p").textContent = producto.descripcion;
        clon.querySelector("h3").textContent += producto.tamano;
        clon.querySelector("h4").textContent += producto.precio;

        let botonB = clon.querySelector(".agregar_carrito");

        botonB.addEventListener('click', (e) => {
            e.preventDefault();

            carrito_array.push(new carrito_dato(producto.nombre, producto.tamano, producto.precio, producto.foto));
            console.log(carrito_array);
            console.log(JSON.stringify(carrito_array));

            localStorage.setItem("carrito", JSON.stringify(carrito_array))
        });

        contenedor.append(clon);
}

// productos en pagina

let cart_contenido = document.querySelector(".grilla");

productosCrema.forEach((mostrar_productos) => {
    agregarProducto (mostrar_productos, cart_contenido)
});

// buscar producto

class buscando {
    constructor(buscar) {
        this.buscar = buscar;
    }
}

let busqueda = [];

let buscarUsuario = document.querySelector("form");

buscarUsuario.addEventListener("submit", (e) => {
    e.preventDefault();

    let buscar = buscarUsuario[0].value.toLowerCase();

    if (buscar !== "") {

        cart_contenido.innerHTML = "";

        busqueda.push(new buscando(buscar));

        const filtros = productosCrema.filter((el) =>
        el.nombre.toLowerCase().includes(buscar)
        );

        if (filtros.length === 0) {
            Swal.fire({
                title: "No hay considencias",
                text: "vuelva a intentarlo",
                icon: "error"
            })
        } else {
                filtros.forEach((crema) => {
                    agregarProducto(crema, cart_contenido);
                });
            }
        }
});
