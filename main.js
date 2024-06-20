document.addEventListener("DOMContentLoaded", function () {
    const movies = [
        { title: "Baby Driver", image: "https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/peliculas/baby-driver/127795123-4-esl-ES/Baby-Driver.jpg?resize=320:*", description: "Descripción de la Pelicula 1" },
        { title: "Pelicula 2", image: "https://via.placeholder.com/200x300", description: "Descripción de la Pelicula 2" },
        { title: "Pelicula 3", image: "https://via.placeholder.com/200x300", description: "Descripción de la Pelicula 3" },
        { title: "Pelicula 4", image: "https://via.placeholder.com/200x300", description: "Descripción de la Pelicula 4" },
        { title: "Pelicula 5", image: "https://via.placeholder.com/200x300", description: "Descripción de la Pelicula 5" },
        { title: "Pelicula 6", image: "https://via.placeholder.com/200x300", description: "Descripción de la Pelicula 6" },
        { title: "Pelicula 7", image: "https://via.placeholder.com/200x300", description: "Descripción de la Pelicula 7" },
        { title: "Pelicula 8", image: "https://via.placeholder.com/200x300", description: "Descripción de la Pelicula 8" },
        { title: "Pelicula 9", image: "https://via.placeholder.com/200x300", description: "Descripción de la Pelicula 9" },
        { title: "Pelicula 10", image: "https://via.placeholder.com/200x300", description: "Descripción de la Pelicula 10" },
        { title: "Pelicula 11", image: "https://via.placeholder.com/200x300", description: "Descripción de la Pelicula 11" },
        { title: "Pelicula 12", image: "https://via.placeholder.com/200x300", description: "Descripción de la Pelicula 12" },
        { title: "Pelicula 13", image: "https://via.placeholder.com/200x300", description: "Descripción de la Pelicula 13" },
        { title: "Pelicula 14", image: "https://via.placeholder.com/200x300", description: "Descripción de la Pelicula 14" },
        { title: "Pelicula 15", image: "https://via.placeholder.com/200x300", description: "Descripción de la Pelicula 15" },
        { title: "Pelicula 16", image: "https://via.placeholder.com/200x300", description: "Descripción de la Pelicula 16" },
        { title: "Pelicula 17", image: "https://via.placeholder.com/200x300", description: "Descripción de la Pelicula 17" },
        { title: "Pelicula 18", image: "https://via.placeholder.com/200x300", description: "Descripción de la Pelicula 18" },
        { title: "Pelicula 19", image: "https://via.placeholder.com/200x300", description: "Descripción de la Pelicula 19" },
        { title: "Pelicula 20", image: "https://via.placeholder.com/200x300", description: "Descripción de la Pelicula 20" },
        { title: "Pelicula 21", image: "https://via.placeholder.com/200x300", description: "Descripción de la Pelicula 21" },
        { title: "Pelicula 22", image: "https://via.placeholder.com/200x300", description: "Descripción de la Pelicula 22" },
        { title: "Pelicula 23", image: "https://via.placeholder.com/200x300", description: "Descripción de la Pelicula 23" },
        { title: "Pelicula 24", image: "https://via.placeholder.com/200x300", description: "Descripción de la Pelicula 24" },
        { title: "Pelicula 25", image: "https://via.placeholder.com/200x300", description: "Descripción de la Pelicula 25" }
    ];

    const moviesContainer = document.getElementById('movies-container');

    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        
        movieElement.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <h2>${movie.title}</h2>
            <p>${movie.description}</p>
        `;
        
        moviesContainer.appendChild(movieElement);
    });
});
