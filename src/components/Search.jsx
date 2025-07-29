import React, { useState, useEffect } from "react";
import { Card } from "./Card";

export const Search = ({ search, setSearch }) => {
  const [movies, setMovies] = useState([]);
  const [sortOrder, setSortOrder] = useState("desc"); // "desc" ou "asc"

  useEffect(() => {
    if (!search) return;
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=${search}&language=fr-FR`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results || []);
      });
    // Quand la recherche évolue, on relance la requête
  }, [search]);

  // Trie la liste selon sortOrder
  const sortedMovies = [...movies].sort((a, b) =>
    sortOrder === "asc"
      ? a.vote_average - b.vote_average
      : b.vote_average - a.vote_average
  );

  return (
    <div className="form-component">
      <div className="container-search">
        <form>
          <input
            type="text"
            placeholder="Entrez le titre d'un film"
            id="search-input"
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        <div className="btn-sort-container">
          <div
            className="btn-sort BadToGood"
            onClick={() => setSortOrder("desc")}
          >
            Top<span>➔</span>
          </div>
          <div
            className="btn-sort GoodToBad"
            onClick={() => setSortOrder("asc")}
          >
            <span>➔</span>Flop
          </div>
        </div>
      </div>

      {/* On passe la liste triée à Card */}
      <Card movies={sortedMovies} />
    </div>
  );
};
