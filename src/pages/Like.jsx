import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import axios from "axios";

export const Like = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    let movieArray = [];
    let moviesId = window.localStorage.movie
      ? // Permet avec .split de transformer la chaine en tableau
        window.localStorage.movie.split(",")
      : [];

    for (let i = 0; i < moviesId.length; i++) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=ed82f4c18f2964e75117c2dc65e2161d`
        )
        .then((res) =>
          // On ajoute les données dans movieArray
          movieArray.push(res.data)
        )
        .then(() =>
          // On met à jour la liste des films affichée
          setListData(movieArray)
        );
    }
    // Mise à jour finale de la liste
    setListData(movieArray);
  }, []);

  return (
    <div className="like-page">
      <Header />
      <h2>Coup de coeur ❤️</h2>
    </div>
  );
};
