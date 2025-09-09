import { NavLink } from "react-router-dom";
import { useBudget } from "../context/BudgetContext";

  function Navbar() {
  const { budgetMode, setBudgetMode } = useBudget();
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

        {/* bottone per la modalità budget */}
        <button
        type="button"
        className="btn-ghost"
        onClick={() => setBudgetMode(!budgetMode)}

      >
        {budgetMode ? "Disattiva modalità budget" : "Attiva modalità budget"}
      </button>
      </div>
    </header>
  );
}

export default Navbar;