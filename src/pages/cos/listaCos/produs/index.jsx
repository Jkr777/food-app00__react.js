import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";

function Produs({ _id, imgUrl, nume, cantitate, pret }) {
  return (
    <div className="container-produs">
      <div className="container-produs__item-data">
        <img className="container-produs__img" src={imgUrl} />
        <span className="container-produs__title">{nume}</span>
      </div>

      <div className="productList-container__quantity">
        <AiOutlinePlusSquare />
        <input 
          type="number"
          className="input-quantity"
          value={cantitate}
          onChange
        /> 
        <AiOutlineMinusSquare />
      </div>

      <span className="container-produs__price">€{pret}</span>
    </div>
  );
}

export default Produs;