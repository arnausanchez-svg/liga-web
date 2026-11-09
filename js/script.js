// Botón de la página de inicio: muestra u oculta un mensaje.
const boton = document.getElementById("btn-mensaje");
const mensaje = document.getElementById("mensaje");

if (boton && mensaje) {
  boton.addEventListener("click", function () {
    const estaOculto = mensaje.hidden;

    if (estaOculto) {
      mensaje.textContent = "¡Bienvenido a la web de La Liga!";
      mensaje.hidden = false;
      boton.textContent = "Ocultar mensaje";
      boton.classList.add("activo");
    } else {
      mensaje.hidden = true;
      boton.textContent = "Mostrar mensaje";
      boton.classList.remove("activo");
    }
  });
}