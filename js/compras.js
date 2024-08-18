//Traer información de la api creada

let productosCrema;
let cart_contenido = document.querySelector(".grilla");

fetch('../datos.json')
.then((Response) => Response.json())
.then((data) => {
    productosCrema = data
    productosCrema.forEach((mostrar_productos) => {
        agregarProducto (mostrar_productos, cart_contenido)
    });
})
.catch((error) =>console.log(error));

// Saludar al usuario

let usuario_loguiado = JSON.parse(localStorage.getItem('loguiado'))

let titulo = document.querySelector("h1").textContent += usuario_loguiado.nombre

//Carito

class carrito_dato {
    constructor(nombre, tamano, precio, foto, id, cantidad) {
        this.id = id;
        this.foto = foto;
        this.nombre = nombre;
        this.tamano = tamano ;
        this.precio = precio;
        this.cantidad = cantidad || 1; 
    }
}

let carrito_array = JSON.parse(localStorage.getItem('carrito')) || [];

// Función para agregar las cartas

function agregarProducto(producto, contenedor) {
    let clon = document.querySelector("template").content.cloneNode(true);
        clon.querySelector("img").src = producto.foto;
        clon.querySelector("h2").textContent = producto.nombre;
        clon.querySelector("p").textContent = producto.descripcion;
        clon.querySelector("h3").textContent += producto.tamano;
        clon.querySelector("h4").textContent += producto.precio.toFixed(2);

        let botonB = clon.querySelector(".agregar_carrito");

        botonB.addEventListener('click', (e) => {
            e.preventDefault();

            let encontre = false
            for (let i = 0 ; i < carrito_array.length; i++) {
                if(producto.id === carrito_array[i].id){
                    carrito_array[i].cantidad = carrito_array[i].cantidad + 1;
                    carrito_array[i].precio = carrito_array[i].precio + producto.precio;
                    encontre=true;
                    break;
                } 
            }

            if(!encontre){
                carrito_array.push(new carrito_dato(producto.nombre, producto.tamano, producto.precio, producto.foto,producto.id,producto.cantidad));
            }

            Toastify({
                text: "Agregar a carrito",
                duration: 1000,
                style: {
                    background: "linear-gradient( to bottom ,#ffe395, #583919)",
                    color: "#000000",
                }
                }).showToast();

            localStorage.setItem("carrito", JSON.stringify(carrito_array))
            
        });

        contenedor.append(clon);
}


// Función para buscar productos

let busqueda = [];

let buscarUsuario = document.querySelector("form");

buscarUsuario.addEventListener("submit", (e) => {
    e.preventDefault();

    let buscar = buscarUsuario[0].value.toLowerCase();

    if (buscar !== "") {

        cart_contenido.innerHTML = "";

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

