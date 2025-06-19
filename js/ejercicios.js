  const form = document.getElementById('quizForm');
  const resultado = document.getElementById('resultado');
  const reintentarBtn = document.getElementById('reintentar');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    let correctas = 0;
    const total = 9;
    const formData = new FormData(form);

    for (let value of formData.values()) {
      if (value === "correcto") {
        correctas++;
      }
    }

    const porcentaje = (correctas / total) * 100;
    resultado.style.display = "block";

    if (porcentaje >= 70) {
      resultado.textContent = `✅ ¡Aprobaste con ${Math.round(porcentaje)}%!`;
      resultado.className = "resultado aprobado";
      reintentarBtn.classList.add("oculto");
    } else {
      resultado.textContent = `❌ Desaprobaste con ${Math.round(porcentaje)}%. Podés intentarlo de nuevo.`;
      resultado.className = "resultado desaprobado";
      reintentarBtn.classList.remove("oculto");
    }
  });

  function reintentar() {
    form.reset();
    resultado.style.display = "none";
    reintentarBtn.classList.add("oculto");
  }
