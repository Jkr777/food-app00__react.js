import { NavLink } from 'react-router-dom';
import { TiShoppingCart, TiUser } from "react-icons/ti";

function NavItems() {
  return (
    <div className="links">
      <NavLink className={navData => navData.isActive ? "link--active right--space" : "link right--space"} to="/cos">Cos <TiShoppingCart /></NavLink>
      {/* <NavLink className={navData => navData.isActive ? "link--active" : "link"} to="/profil">Contu Meu <TiUser /> </NavLink> */}
      <NavLink className={navData => navData.isActive ? "link--active" : "link"} to="/auth/logare">Logare <TiUser /> </NavLink>
    </div>
  );
}

export default NavItems;