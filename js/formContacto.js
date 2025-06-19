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
            nombre: {
                valor: d.nombre,
                regex: /^[A-Za-zÁÉÍÓÚÑñáéíóú\s]{3,}$/,
                mensaje: "El nombre debe tener al menos 3 letras y solo letras."
            },
            email: {
                valor: d.email,
                regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                mensaje: "El email debe tener un formato válido (ejemplo@dominio.com)."
            },
            telefono: {
                valor: d.telefono,
                regex: /^\+\d{12}$/,
                opcional: true,
                mensaje: "El teléfono debe empezar con + y tener 12 dígitos."
            },
            empresa: {
                valor: d.empresa,
                regex: /^[A-Za-zÁÉÍÓÚÑñáéíóú0-9\s&.,()\-'"]{2,}$/,
                mensaje: "La empresa debe tener al menos 2 caracteres válidos."
            },
            mensaje: {
                valor: d.mensaje,
                regex: /^.{5,}$/,
                mensaje: "El mensaje debe tener al menos 5 caracteres."
            }
        };

        for (const campo in campos) {
            const input = document.getElementById(campo);
            const { valor, regex, opcional, mensaje } = campos[campo];

            input.classList.remove("is-valid", "is-invalid");

            if (opcional && valor === "") {
                input.classList.add("is-valid");
                continue;
            }

            if (!regex.test(valor)) {
                alert(mensaje);
                input.classList.add("is-invalid");
                valido = false;
                break; // Detiene la validación para corregir un error a la vez
            } else {
                input.classList.add("is-valid");
            }
        }

        return valido;
    }
});

