import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/like"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Coup de coeur</li>
        </NavLink>
      </ul>
    </div>
  );
};
