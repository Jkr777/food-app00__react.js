import { Link } from "react-router-dom";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";

function Product({ _id, imgUrl, nume, pret }) {
  return (
    <div className="productList-container">
      <Link to={`/produs/${_id}`}>
        <img className="productList-container__img" src={imgUrl} />
      </Link>
      <span className="productList-container__nume">{nume}</span>
      <span className="productList-container__pret">€{pret}</span>
      <div className="productList-container__quantity">
        <AiOutlinePlusSquare />
        <input 
          type="number"
          className="input-quantity"
        /> 
        <AiOutlineMinusSquare />
      </div>
      <button className="utility-btn">Adauga in cos</button>
    </div>
  );
}

export default Product;