import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import axios from "axios";
import { Card } from "../components/Card";

export const Like = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    let moviesId = window.localStorage.movie
      ? window.localStorage.movie.split(",")
      : [];

    let moviesArray = [];
    moviesId.forEach((id) => {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=ed82f4c18f2964e75117c2dc65e2161d`
        )
        .then((res) => {
          moviesArray.push(res.data);
          if (moviesArray.length === moviesId.length) {
            setListData(moviesArray);
          }
        });
    });
  }, []);

  return (
    <div className="like-page">
      <Header />
      <h2>Coup de coeur ❤️</h2>
      <div className="result">
        {listData.length > 0 ? (
          <Card movies={listData} />
        ) : (
          <h3>Aucun coup de coeur pour le moment</h3>
        )}
      </div>
    </div>
  );
};
