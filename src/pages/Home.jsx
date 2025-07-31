import React, { useState } from "react";
import { Search } from "../components/Search";
import { Header } from "../components/Header";

export const Home = () => {
  const [search, setSearch] = useState("code");

  return (
    <div className="home-page">
      <Header />
      <Search search={search} setSearch={setSearch} />
    </div>
  );
};
