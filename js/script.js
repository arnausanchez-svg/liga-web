// Botón de la página de inicio: muestra u oculta un mensaje.
// El script se carga en las tres páginas, así que primero
// comprobamos que el botón existe en la página actual.

const boton = document.getElementById("btn-mensaje");
const mensaje = document.getElementById("mensaje");

if (boton && mensaje) {
  boton.addEventListener("click", function () {
    const estaOculto = mensaje.hidden;

    if (estaOculto) {
      mensaje.textContent = "¡Bienvenido a la web de La Liga!";
      mensaje.hidden = false;
      boton.textContent = "Ocultar mensaje";
    } else {
      mensaje.hidden = true;
      boton.textContent = "Mostrar mensaje";
    }
  });
}
