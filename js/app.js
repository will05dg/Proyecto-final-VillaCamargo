class UsuarioAr {
    constructor(nombre, contrasena) {
        this.nombre = nombre;
        this.contrasena = contrasena;
    }
}

let usuarios = [];

let datosUsuario = document.querySelector("form");

datosUsuario.addEventListener("submit", (e) => {
    e.preventDefault();

    let nombre = datosUsuario[0].value || 'sin_nombre'
    let contrasena = datosUsuario[1].value || 'sin_contrasena'

    usuarios.push(new UsuarioAr(nombre, contrasena));
    console.log(usuarios);

    let usuarioJson = JSON.stringify(usuarios);
    localStorage.setItem("personaA", usuarioJson);

    if (nombre === 'sin_nombre' || contrasena === 'sin_contrasena'){
        Swal.fire({
            title: "No completo los campos",
            text: "Completar",
            icon: "error"
        });
    } else (
        location.href = '../pages/ingresar.html'
    )
});
