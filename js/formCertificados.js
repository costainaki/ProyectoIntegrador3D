document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", function (e) {
        e.preventDefault(); // Siempre prevenir por defecto

        if (verificarDatos()) {
        enviarMail(); // Si está todo OK, enviamos el mail
        }
        else console.log("Tu mensaje ha sido enviado")
    });
});

function verificarDatos() {
    let valido = true;
    const campos = document.querySelectorAll("#formulario input, #formulario textarea");

    campos.forEach(campo => {
        campo.classList.remove("is-valid", "is-invalid");

        if (!campo.checkValidity()) {
        campo.classList.add("is-invalid");
        valido = false;
        } else {
        campo.classList.add("is-valid");
        }
    });

    return valido;
}

function enviarMail() {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const empresa = document.getElementById("empresa").value;
    const mensaje = document.getElementById("mensaje").value;

    const asunto = encodeURIComponent("Consulta desde formulario de certificados");
    const cuerpo = encodeURIComponent(
        `Nombre y Apellido: ${nombre}\nEmail: ${email}\nTeléfono: ${telefono}\nEmpresa: ${empresa}\n\nMensaje:\n${mensaje}`
    );

    const mailtoLink = `mailto:agostina.collado@gmail.com?subject=${asunto}&body=${cuerpo}`;

    // Mostrar el cartel de éxito
    const cartel = document.getElementById("mensajeExito");
    cartel.classList.remove("d-none");

    // Opcional: ocultarlo después de unos segundos
    setTimeout(() => {
        cartel.classList.add("d-none");
    }, 5000);

    // Abrir el mailto
    window.location.href = mailtoLink;
}

