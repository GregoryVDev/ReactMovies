import React, { useEffect, useState } from "react";

export const Card = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=foot&language=fr-FR`
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return "Date inconnue";
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("fr-FR", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    }).format(date);
  };

  const genreFinder = (film) => {
    let genreArray = [];
    // Permet de faire une boucle afin de récupérer le/les genres du film
    for (let i = 0; i < film.genre_ids.length; i++) {
      switch (film.genre_ids[i]) {
        case 28:
          genreArray.push("Action");
          break;
        case 12:
          genreArray.push("Aventure");
          break;
        case 16:
          genreArray.push("Animation");
          break;
        case 35:
          genreArray.push("Comédie");
          break;
        case 80:
          genreArray.push("Policier");
          break;
        case 99:
          genreArray.push("Documentaire");
          break;
        case 18:
          genreArray.push("Drama");
          break;
        case 10751:
          genreArray.push("Famille");
          break;
        case 14:
          genreArray.push("Fantaisie");
          break;
        case 36:
          genreArray.push("Histoire");
          break;
        case 27:
          genreArray.push("Horreur");
          break;
        case 10402:
          genreArray.push("Musique");
          break;
        case 9648:
          genreArray.push("Mystère");
          break;
        case 10749:
          genreArray.push("Romance");
          break;
        case 878:
          genreArray.push("Science-fiction");
          break;
        case 10770:
          genreArray.push("Téléfilm");
          break;
        case 53:
          genreArray.push("Thriller");
          break;
        case 10752:
          genreArray.push("Guerre");
          break;
        case 37:
          genreArray.push("Western");
          break;
        default:
          break;
      }
    }
    return genreArray.map((genre) => (
      <li key={genre} className="moviesGenres">
        {genre}
      </li>
    ));
  };

  return (
    <div className="container-articles">
      {movies.slice(0, 12).map((film) => (
        <article key={film.id} className="article-movie">
          <img
            src={
              film.poster_path
                ? `https://image.tmdb.org/t/p/w500` + film.poster_path
                : "../assets/poster.jpg"
            }
            alt={film.original_title}
          />
          <h3>{film.original_title}</h3>
          {film.release_date ? (
            <p className="date">Sorti le : {formatDate(film.release_date)}</p>
          ) : null}
          <h4>
            {/* Retire les chiffres après la virgule pour garder un chiffre entier */}
            {film.vote_average.toFixed(0)}/10 <span>⭐​</span>
          </h4>
          <ul className="list">{film.genre_ids ? genreFinder(film) : null}</ul>
        </article>
      ))}
    </div>
  );
};

// 40min 27
