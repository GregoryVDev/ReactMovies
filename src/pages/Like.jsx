import { useEffect, useState } from "react";
import { Header } from "../components/Header";

export const Like = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    let moviesId = window.localStorage.movie
      ? // Permet avec .split de transformer la chaine en tableau
        window.localStorage.movie.split(",")
      : [];

    console.log(moviesId);
  }, []);

  return (
    <div className="like-page">
      <Header />
      <h2>Coup de coeur ❤️</h2>
    </div>
  );
};
