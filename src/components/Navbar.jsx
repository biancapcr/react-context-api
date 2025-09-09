import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="topbar">
      <div className="topbar-inner">

        <nav className="menu" aria-label="Main">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `menu-link${isActive ? " is-active" : ""}`}
          >
            Homepage
          </NavLink>

          <NavLink
            to="/prodotti"
            className={({ isActive }) => `menu-link${isActive ? " is-active" : ""}`}
          >
            Prodotti
          </NavLink>

          <NavLink
            to="/chisiamo"
            className={({ isActive }) => `menu-link${isActive ? " is-active" : ""}`}
          >
            Chi Siamo
          </NavLink>
        </nav>
      </div>
    </header>
  );
}