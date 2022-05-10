import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MoreInfo from "../../components/moreInfo";
import ListaCos from './listaCos/index'

function Cos() {
  const [sum, changeSum] = useState(0);
  const cart = useSelector(state => state.cos);

  useEffect(() => {
    if(cart.total < 100) {
      const val = 100 - cart.total;
      changeSum(val);
    }
  }, [cart.total])

  return (
    <section className="cos-container">
      <h1 className="cos-container__title">Cosul meu</h1>
      {cart.total < 100 ? <span className="cos-container__info">{`Cumpara de inca €${sum} pentru transportul gratuit!`}</span> : null}
      <ListaCos produse={cart.produse} sum={sum} total={cart.total } />
      <span className="cos-container__taxes">Taxe incluse</span>
      <button className="buy-btn bottom--space-3 ">Trimite comanda</button>
      <MoreInfo />
    </section>
  );
}

export default Cos;