// Funcionalidad para abrir "Homo" en categoría
const homeButton = document.getElementById("home-boton");
if (homeButton) {
  homeButton.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "index.html";
  });
}
