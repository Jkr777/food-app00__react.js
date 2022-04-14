import { useDispatch, useSelector } from "react-redux";
import Category from "./category";

function Categories() {
  const categories = useSelector(state => state.categorii.lista);

  return (
    <div className="categories-container">
      <div className="categories-container__left">
        <h1 className="categories-container__left__title">ALEGE O CATEGORIE</h1>
        <p className="categories-container__left__description">Alege dintr-o gama larga de produse. Cu drag se va ambala profesional fiecare comanda, iar prin intermediul partenerilor nostri de curierat va veti bucura de produsele dorite in cel mai scurt timp.</p>
      </div>
      <div className="categories-container__right">
        {categories.map(e => <Category key={e.nume} {...e} />)}
      </div>
    </div>
  );
}

export default Categories;