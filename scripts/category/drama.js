document.addEventListener("DOMContentLoaded", () => {
  const moviesContainer = document.getElementById("movies-container");

  movies.forEach((movie) => {
    if (movie.description.toLowerCase().includes("drama")) {
      const movieElement = document.createElement("div");
      movieElement.classList.add("movie");

      movieElement.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <h2>${movie.title}</h2>
            <p>${movie.description}</p>`;

      moviesContainer.appendChild(movieElement); // Mover esta línea dentro del bloque if
    }
  });
});

// Funcionalidades para usar los botones de la barra de navegación

// Funcionalidad para abrir el form de contacto
const contactButton = document.getElementById("contactButton");
if (contactButton) {
  contactButton.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "../../form.html";
  });
}

// Funcionalidad "volver atrás" con el botón del formulario
const volverAtras = document.getElementById("btn-volver-atras");
if (volverAtras) {
  volverAtras.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "../../index.html";
  });
}

// Funcionalidad para abrir "Home" en categoría
const homeButton = document.getElementById("home-boton");
if (homeButton) {
  homeButton.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "./../index.html";
  });
}

// Funcionalidad para abrir "todo" en categoría
const todoButton = document.getElementById("category-todo");
if (todoButton) {
  todoButton.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "./../category/todo.html";
  });
}

// Funcionalidad para abrir "acción" en categoría
const accionButton = document.getElementById("category-accion");
if (accionButton) {
  accionButton.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "./../category/accion.html";
  });
}

// Funcionalidad para abrir "comedia" en categoría
const comediaButton = document.getElementById("category-comedia");
if (comediaButton) {
  comediaButton.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "./../category/comedia.html";
  });
}

// Funcionalidad para abrir "drama" en categoría
const dramaButton = document.getElementById("category-drama");
if (dramaButton) {
  dramaButton.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "./../category/drama.html";
  });
}

// Funcionalidad para abrir "romance" en categoría
const romanceButton = document.getElementById("category-romance");
if (romanceButton) {
  romanceButton.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "./../category/romance.html";
  });
}
