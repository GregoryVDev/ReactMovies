import { useEffect, useState } from "react";
import { Header } from "../components/Header";

export const Like = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    let moviesId = window.localStorage.movies ? window.localStorage.movies : [];
  }, []);

  return (
    <div className="like-page">
      <Header />
      <h2>Coup de coeur</h2>
    </div>
  );
};
