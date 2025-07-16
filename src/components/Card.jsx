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
  return (
    <div>
      {movies.map((film) => (
        <article key={film.id} className="article-movie">
          <h3>{film.original_title}</h3>
        </article>
      ))}
    </div>
  );
};
