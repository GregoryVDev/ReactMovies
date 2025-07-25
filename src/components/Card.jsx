import React, { useEffect, useState } from "react";

export const Card = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=code&language=fr-FR`
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
          <p className="date">Sorti le : {formatDate(film.release_date)}</p>
        </article>
      ))}
    </div>
  );
};
