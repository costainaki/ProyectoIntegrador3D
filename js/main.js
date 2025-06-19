const nombre = document.getElementById('nombre')
const email = document.getElementById('email')
const telefono = document.getElementById('telefono')
const compañia = document.getElementById('empresa')
const formulario = document.getElementById('formulario')
const elementoError = document.getElementById('error')

formulario.addEventListener('submit', (e)  => {
    let mensajes = []
    if (nombre.value === '' || nombre.value == null) {
        mensajes.push('Ingrese su nombre y apellido')
    }
    if (nombre.value.length < 3) {
        mensajes.push('Su nombre debe contener al menos 3 caracteres')
    }
    if (nombre.value.length > 70) {
        mensajes.push('Su nombre debe contener menos de 70 caracteres')
    }
    if (mensajes.length > 0) {
        e.preventDefault()
        elementoError.innerText = mensajes.join(', ')
    }
})
