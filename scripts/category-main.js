// Funcionalidad para abrir "Home" en categoría
const homeButton = document.getElementById("home-boton");
if (homeButton) {
  homeButton.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "../index.html";
  });
}

const contactoButton = document.getElementById("contacto-boton");
if (contactoButton) {
  contactoButton.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "../form.html";
  });
}
