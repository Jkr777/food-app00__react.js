import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function TopIntro() {
  const categories = useSelector(state => state.categorii.lista);

  return (
    <div className="topIntro-container">
      <div className="topIntro-container__left">
        <h1 className="topIntro-container__left__title">PRODUSE TRADITIONALE LA TINE ACASA, ORIUNDE IN EUROPA</h1>
        <h2 className="topIntro-container__left__sub-title">Promovam peste 700 de specialitati autohtone selectionate pentru dvs. de la brandurile romanesti de top</h2>
        <Link to={`/produse/${categories[0].nume}`}>
          <button className="link-btn">Vezi Produsele</button>
        </Link>
      </div>
      <div className="topIntro-container__right">
        <img className="topIntro-container__right__img" src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"/>
      </div>
    </div>
  );
}

export default TopIntro;