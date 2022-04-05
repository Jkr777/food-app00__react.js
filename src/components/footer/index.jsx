import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <nav>
        <NavLink to="/info/terms">TERMENI & CONDITII</NavLink>
        <NavLink to="/info/about">DESPRE NOI</NavLink>
        <NavLink to="/info/delivery">COMANDA & LIVRARE</NavLink>
      </nav>
    </footer>
  );
}

export default Footer;