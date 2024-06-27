document.addEventListener("DOMContentLoaded", () => {
  const moviesContainer = document.getElementById("movies-container");

  movies.forEach((movie) => {
    if (movie.description.toLowerCase().includes("acción")) {
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
