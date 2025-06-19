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
        mensajeExito.classList.remove("d-none");

        setTimeout(() => {
            const asunto = encodeURIComponent("Consulta desde formulario de contacto");
            const cuerpo = encodeURIComponent(
            `Nombre y Apellido: ${datos.nombre}\nEmail: ${datos.email}\nTeléfono: ${datos.telefono}\nEmpresa: ${datos.empresa}\n\nMensaje:\n${datos.mensaje}`
        );
        const mailtoLink = `mailto:agostina.collado@gmail.com?subject=${asunto}&body=${cuerpo}`;

        window.location.href = mailtoLink;

        setTimeout(() => {
            mensajeExito.classList.add("d-none");
            formulario.reset();

            ["nombre", "email", "telefono", "empresa", "mensaje"].forEach(id => {
            formulario[id].classList.remove("is-valid", "is-invalid");
                });
            }, 3000);
        }, 300);
    }
});

function validarFormulario(d) {
    let valido = true;

    const campos = {
        nombre: { valor: d.nombre, regex: /^[A-Za-zÁÉÍÓÚÑñáéíóú\s]{3,}$/ },
        email: { valor: d.email, regex: /^\S+@\S+\.\S+$/ },
        telefono: { valor: d.telefono, regex: /^\+\d{12}$/, opcional: true },
        empresa: { valor: d.empresa, regex: /^[A-Za-zÁÉÍÓÚÑñáéíóú0-9\s&.,()\-'"]{2,}$/ },
        mensaje: { valor: d.mensaje, regex: /^.{5,}$/ }
    };

    for (const campo in campos) {
        const input = document.getElementById(campo);
        const { valor, regex, opcional } = campos[campo];

        input.classList.remove("is-valid", "is-invalid");

        if (opcional && valor === "") {
            input.classList.add("is-valid");
        } else if (regex.test(valor)) {
            input.classList.add("is-valid");
        } else {
            input.classList.add("is-invalid");
            valido = false;
        }
    }

    return valido;
    }
});
