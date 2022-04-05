import { NavLink } from 'react-router-dom';
import { TiShoppingCart, TiUser } from "react-icons/ti";

function NavItems() {
  return (
    <div className="links">
      <NavLink className="link link--first" to="/cos">Cos <TiShoppingCart /></NavLink>
      <NavLink className="link" to="/profil">Contu Meu <TiUser /> </NavLink>
    </div>
  );
}

export default NavItems;