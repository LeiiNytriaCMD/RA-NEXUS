// ==========================================================================
// LÓGICA E INTERACTIVIDAD EN JAVASCRIPT: NEXUS
// ==========================================================================

document.addEventListener("DOMContentLoaded", function () {

  console.log("[Sistema] La página se ha cargado/reiniciado correctamente.");

  // 1. Reloj dinámico en tiempo real (Formato de 12 horas)
  function actualizarReloj() {
    const ahora = new Date();
    let horas = ahora.getHours();
    const minutos = String(ahora.getMinutes()).padStart(2, '0');
    const segundos = String(ahora.getSeconds()).padStart(2, '0');
    const ampm = horas >= 12 ? 'PM' : 'AM';

    horas = horas % 12;
    horas = horas ? horas : 12; 
    const horasFormateadas = String(horas).padStart(2, '0');

    const elementoReloj = document.getElementById("reloj");
    if (elementoReloj) {
      elementoReloj.textContent = `${horasFormateadas}:${minutos}:${segundos} ${ampm}`;
    }
  }

  setInterval(actualizarReloj, 1000);
  actualizarReloj();

  // 2. Detección de evento 'input' para contar caracteres en tiempo real
  const textareaMensaje = document.getElementById("mensaje");
  const contadorSpan = document.getElementById("contadorCaracteres");

  if (textareaMensaje && contadorSpan) {
    textareaMensaje.addEventListener("input", function (e) {
      const longitudActual = e.target.value.length;
      contadorSpan.textContent = longitudActual;
    });
  }

  // 3. Detección de eventos del mouse (mouseover / mouseleave) en botones
  const botones = document.querySelectorAll(".boton, button");
  botones.forEach(boton => {
    boton.addEventListener("mouseover", function () {
      console.log(`[Mouseover] Puntero sobre el botón: ${this.textContent.trim()}`);
    });

    boton.addEventListener("mouseleave", function () {
      console.log(`[Mouseleave] Puntero fuera del botón: ${this.textContent.trim()}`);
    });
  });

  // 4, 5 y 6. Validación del formulario, alerta de confirmación y LocalStorage
  const formulario = document.getElementById("formularioContacto");
  if (formulario) {
    formulario.addEventListener("submit", function (e) {
      e.preventDefault(); // Detiene el envío por defecto del navegador

      const nombre = document.getElementById("nombre").value.trim();
      const email = document.getElementById("email").value.trim();
      const telefono = document.getElementById("telefono").value.trim();
      const mensaje = document.getElementById("mensaje").value.trim();

      // Validación de campos vacíos
      if (!nombre || !email || !mensaje) {
        alert("Por favor, completa todos los campos requeridos.");
        return;
      }

      // Estructura JSON para registro
      const datosRegistro = {
        nombre: nombre,
        email: email,
        telefono: telefono,
        mensaje: mensaje,
        fecha: new Date().toLocaleString()
      };

      // Guardar información en localStorage mediante JSON.stringify()
      localStorage.setItem("registroContactoNexus", JSON.stringify(datosRegistro));

      // Mensaje interactivo de confirmación
      alert(`¡Gracias por contactarnos, ${nombre}! Tus datos fueron guardados exitosamente en el navegador (LocalStorage).`);

      // Limpiar los campos del formulario y restablecer el contador
      formulario.reset();
      if (contadorSpan) {
        contadorSpan.textContent = "0";
      }
    });
  }
});