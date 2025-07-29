import React, { useState } from "react";
import { Search } from "../components/Search";

export const Home = () => {
  const [search, setSearch] = useState("code");

  return (
    <div className="home-page">
      <Search search={search} setSearch={setSearch} />
    </div>
  );
};
