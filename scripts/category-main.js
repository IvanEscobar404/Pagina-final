// Funcionalidad para abrir "Home" en categoría
const homeButton = document.getElementById("home-boton");
if (homeButton) {
  homeButton.addEventListener("click", (e) => {
    e.preventDefault(); // Evitar que js haga una funcionalidad por default
    window.location.href = "../index.html";
  });
}

// Funcionalidad para abrir "Contacto" el formulario.
const contactoButton = document.getElementById("contacto-boton");
if (contactoButton) {
  contactoButton.addEventListener("click", (e) => {
    e.preventDefault(); // Evitar que js haga una funcionalidad por default
    window.location.href = "../form.html";
  });
}
