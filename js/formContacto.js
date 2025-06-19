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
        const asunto = encodeURIComponent("Consulta desde formulario de contacto");
        const cuerpo = encodeURIComponent(
            `Nombre y Apellido: ${datos.nombre}\nEmail: ${datos.email}\nTeléfono: ${datos.telefono}\nEmpresa: ${datos.empresa}\n\nMensaje:\n${datos.mensaje}`
        );

        const mailtoLink = `mailto:agostina.collado@gmail.com?subject=${asunto}&body=${cuerpo}`;
        window.location.href = mailtoLink;

        mensajeExito.classList.remove("d-none");
        setTimeout(() => mensajeExito.classList.add("d-none"), 5000);

        formulario.reset();
        }
    });

    function validarFormulario(d) {
        let valido = true;

        if (!/^[A-Za-zÁÉÍÓÚÑñáéíóú\s]{3,}$/.test(d.nombre)) valido = false;
        if (!/^\S+@\S+\.\S+$/.test(d.email)) valido = false;
        if (d.telefono && !/^\+\d{12}$/.test(d.telefono)) valido = false;
        if (d.empresa.length < 2) valido = false;
        if (d.mensaje.length < 5) valido = false;

        return valido;
    }
});
