import { NavLink } from "react-router-dom";

function ProfilNav() {
  return (
    <div className="profilNav-container">
      <NavLink className={navData => navData.isActive ? "profilNav-container__link profilNav-container__link--active" : "profilNav-container__link"} to="/profil">Comenzile Mele</NavLink>
      <NavLink className={navData => navData.isActive ? "profilNav-container__link profilNav-container__link--active" : "profilNav-container__link"} to="/profil/informatii-cont">Informatii Cont</NavLink>
      <NavLink className="profilNav-container__link" to="">Delogare</NavLink>
    </div>
  );
}

export default ProfilNav;