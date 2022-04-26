import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BsCurrencyEuro } from "react-icons/bs";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";

function Produs() {
  const { nume, pret, kg, imgUrl, descriere } = useSelector(state => state.produs);

  return (
    <section className="produs-container">
      <div className="produs-container__img-container">
        <img className="produs-container__img-container__img" src={imgUrl} />
      </div>
      <div>
        <div className="produs-container__info-container">
          <span className="produs-container__info-container__title">{nume}</span>
          <span className="produs-container__info-container__price"><BsCurrencyEuro /> {pret}</span>
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

        <div className="produs-container__info-container">
          <span className="produs-container__info-container__description--title">Descriere</span>
          <p className="produs-container__info-container__description">{descriere}</p>
          <p className="produs-container__info-container__quantity">{kg} kg</p>
        </div>
      </div>
    </section>
  );
}

export default Produs;