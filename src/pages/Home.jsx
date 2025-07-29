import React, { useState } from "react";
import { Card } from "../components/Card";
import { Search } from "../components/Search";

export const Home = () => {
  const [search, setSearch] = useState("code");

  return (
    <div className="home-page">
      <Search search={search} setSearch={setSearch} />
      <Card search={search} />
    </div>
  );
};
