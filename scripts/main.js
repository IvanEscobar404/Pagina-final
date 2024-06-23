document.addEventListener("DOMContentLoaded", () => {
  const moviesContainer = document.getElementById("movies-container");

  movies.forEach((movie) => {
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");

    movieElement.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <h2>${movie.title}</h2>
            <p>${movie.description}</p>
        `;

    moviesContainer.appendChild(movieElement);
  });

  //Funcionalidad para abrir el form de contacto en una nueva pestaña
  const contactButton = document.getElementById("contactButton");
  contactButton.addEventListener("click", (e) => {
    window.location.href = "form.html";
  });
  //Funcionalidad "volver atrás" con elbotón del formulario.
  const volverAtras = document.getElementById("btn-volver-atras");
  volverAtras.addEventListener("click", (e) => {
    window.location.href = "index.html";
  });
});
