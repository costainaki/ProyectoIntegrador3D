document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formulario");
    const mensajeExito = document.getElementById("mensajeExito");

    formulario.addEventListener("submit", function (e) {
        e.preventDefault();

        const datos = {
            nombre: formulario.nombre.value.trim(),
            email: formulario.email.value.trim(),
            telefono: formulario.telefono.value.trim(),
            empresa: formulario.empresa.value.trim(),
            mensaje: formulario.mensaje.value.trim()
        };

        if (validarFormulario(datos)) {
            enviarMail(datos);
            mostrarMensajeExito();
            formulario.reset();
            limpiarValidaciones();
        }
    });

    function validarFormulario(datos) {
        let valido = true;

        if (!/^[A-Za-zÁÉÍÓÚÑñáéíóú\s]{3,}$/.test(datos.nombre)) {
            marcarInvalido("nombre");
            valido = false;
        } else {
            marcarValido("nombre");
        }

        if (!/^\S+@\S+\.\S+$/.test(datos.email)) {
            marcarInvalido("email");
            valido = false;
        } else {
            marcarValido("email");
        }

        if (datos.telefono && !/^\+\d{12}$/.test(datos.telefono)) {
            marcarInvalido("telefono");
            valido = false;
        } else {
            marcarValido("telefono");
        }

        if (datos.empresa.length < 2) {
            marcarInvalido("empresa");
            valido = false;
        } else {
            marcarValido("empresa");
        }

        if (datos.mensaje.length < 5) {
            marcarInvalido("mensaje");
            valido = false;
        } else {
            marcarValido("mensaje");
        }

        return valido;
    }

    function marcarInvalido(id) {
        const campo = document.getElementById(id);
        campo.classList.add("is-invalid");
        campo.classList.remove("is-valid");
    }

    function marcarValido(id) {
        const campo = document.getElementById(id);
        campo.classList.add("is-valid");
        campo.classList.remove("is-invalid");
    }

    function limpiarValidaciones() {
        const campos = formulario.querySelectorAll("input, textarea");
        campos.forEach(campo => {
            campo.classList.remove("is-valid", "is-invalid");
        });
    }

    function mostrarMensajeExito() {
        mensajeExito.classList.remove("d-none");
        setTimeout(() => {
            mensajeExito.classList.add("d-none");
        }, 5000);
    }

    function enviarMail(datos) {
        const asunto = encodeURIComponent("Consulta desde formulario de contacto");
        const cuerpo = encodeURIComponent(
            `Nombre y Apellido: ${datos.nombre}\nEmail: ${datos.email}\nTeléfono: ${datos.telefono}\nEmpresa: ${datos.empresa}\n\nMensaje:\n${datos.mensaje}`
        );

        const mailtoLink = `mailto:agostina.collado@gmail.com?subject=${asunto}&body=${cuerpo}`;
        window.location.href = mailtoLink;
    }
});
