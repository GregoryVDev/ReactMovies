import { useEffect, useState } from "react";
import { Header } from "../components/Header";

export const Like = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    let moviesId = window.localStorage.movie
      ? // Permet avec .split de transformer la chaine en tableau
        window.localStorage.movie.split(",")
      : [];

    for (let i = 0; i < moviesId.length; i++) {
      axios.get(
        `https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=ed82f4c18f2964e75117c2dc65e2161d`
      );
    }
  }, []);

  return (
    <div className="like-page">
      <Header />
      <h2>Coup de coeur ❤️</h2>
    </div>
  );
};
