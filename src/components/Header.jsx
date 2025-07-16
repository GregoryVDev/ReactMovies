import { NavLink } from "react-router-dom";
import "../css/header.css";

export const Header = () => {
  return (
    <header>
      <div className="navigation">
        <ul>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Accueil</li>
          </NavLink>
          <NavLink
            to="/like"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Coup de coeur</li>
          </NavLink>
          <h1>React Movies</h1>
        </ul>
      </div>
    </header>
  );
};
