

let usuario_verificado =JSON.parse(localStorage.getItem('personaA'))

let ingreso = document.querySelector('form') 

ingreso.addEventListener('submit', (e) => {
    e.preventDefault()

    let nombre = ingreso[0].value;
    let contrasena = ingreso[1].value;

    let usuario = usuario_verificado.find((usuario) => {
        return usuario.nombre == nombre && usuario.contrasena == contrasena
    })

    if (usuario){
        let sessionStorage =JSON.stringify(usuario)
        localStorage.setItem('loguiado',sessionStorage)

        location.href = 'compra.html'
    } else (
        Swal.fire({
            title: "No hay un usuario registrado",
            text: "Vuelva a intentarlo",
            icon: "error"
        })
    )
})



