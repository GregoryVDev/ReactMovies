import { Card } from "../components/Card";
import { Search } from "../components/Search";

export const Home = () => {
  return (
    <div className="home-page">
      <Search />
      <Card />
    </div>
  );
};
