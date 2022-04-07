import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <nav className="footer__nav">
        <NavLink className={navData => navData.isActive ? "footer__nav__link--active" : "footer__nav__link"} to="/info/terms">TERMENI & CONDITII</NavLink>
        <NavLink className={navData => navData.isActive ? "footer__nav__link--active" : "footer__nav__link"} to="/info/about">DESPRE NOI</NavLink>
        <NavLink className={navData => navData.isActive ? "footer__nav__link--active" : "footer__nav__link"} to="/info/delivery">COMANDA & LIVRARE</NavLink>
      </nav>
      <small className="copyright">&copy; 2021 Magazin romanesc "Hermannstadt" Germania</small>
    </footer>
  );
}

export default Footer;