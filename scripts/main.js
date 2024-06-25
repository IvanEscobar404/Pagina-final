// Funcionalidad para abrir el form de contacto en una nueva pestaña
const contactButton = document.getElementById("contactButton");
if (contactButton) {
  contactButton.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "form.html";
  });
}

// Funcionalidad "volver atrás" con el botón del formulario
const volverAtras = document.getElementById("btn-volver-atras");
if (volverAtras) {
  volverAtras.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "index.html";
  });
}
