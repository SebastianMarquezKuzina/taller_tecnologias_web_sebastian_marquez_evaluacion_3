function obtener_formulario_jquery() {


    var email = $("#email").val()
    var contrasenia = $("#pwd").val()
    var telefono = $("#phn").val()
    var direccion = $("#adrss").val()
    var nombre = $("#name").val()
    var errores = ""


    if (nombre.length <= 1) {
        errores = errores + "<p class='text-danger'>nombre es campo requerido o debe ser mayor a 1 caracter\n</p>"
    }

    if (contrasenia.length == 0) {
        errores = errores + "<p class='text-danger'>contraseña es un campo obligatorio\n</p>"
    }

    if (telefono.length == 0) {
        errores = errores + "<p class='text-danger'>telefono es un campo obligatorio\n</p>"
    }

    if (direccion.length == 0) {
        errores = errores + "<p class='text-danger'>dirección es un campo obligatorio\n</p>"
    }

    if (email.length == 0) {
        errores = errores + "<p class='text-danger'>email es un campo requerido\n</p>"
    }

    if (errores != 0) {
        //alert(errores)
        $("#errores").html(errores)
        Swal.fire({
            icon: "error",
            title: "Auch!",
            text: "Creo que te faltaron algunos datos!, si haces click en 'por que pasa esto?' la pagina va a bajar a la lista de datos que te faltan (los textos que estan en rojo)",
            footer: '<a href="#errores">Por que pasa esto?</a>'
        });
    }

    if (errores == 0) {
        $("#errores").html("")
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Envío Exitoso!",
            text: "Tu perrito lo agradece! c:",
            showConfirmButton: false,
            timer: 3000
        });
    }
}

function sweetalert_inicio() {
    Swal.fire({
        title: "Primera vez aqui?",
        text: "Este es nuestro sitio web, si no tienes claro que es lo que puedes hacer aquí, te recomendamos ir a la sección 'Formulario de registro', para que podamos enviarte información relevante.Muchas gracias por visitar nuestro sitio!!",
        icon: "info"
    });
}

function sweetalert_logo(){
    Swal.fire({
        title: "Ciisa Mascotas",
        text: "CIISA Instituto de ciencias tecnologicas. Av. Libertador Bernardo O'Higgins #2221, Santiago, Chile. Metro República.contacto: +56 9 3253 4388.Atención: Lunes a Viernes de 09:00 a 18:00 hrs",
        imageUrl: "IMG MASCOTA 2.jpg",
        imageWidth: 400,
        imageHeight: 400,
        imageAlt: "Custom image"
      });
}