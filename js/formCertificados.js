document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario");

        formulario.addEventListener("submit", function (e) {
        if (!verificarDatos(e)) {
            e.preventDefault();
        }
        else console.log("Tu mensaje ha sido enviado")
    });
});

function verificarDatos(e) {
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
