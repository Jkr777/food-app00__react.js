import { NavLink } from "react-router-dom";
import NavItems from "./navItems";

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <NavLink className="nav__logo" to='/'>RETETE<span className="nav__logo--color">BUNICA</span></NavLink>
        <NavItems />
      </nav>
    </header>
  );
}

export default Header;