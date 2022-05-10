import Produs from "./produs/index";

function ListaCos({ produse, sum, total }) {
  return (
    <div className="listaCos-container">
      <div className="listaCos-container__info">
        <span>produse</span>
        <span>pret</span>
      </div>
      {produse.map(p => <Produs key={p._id} {...p} />)}
      <span className="oldList-container__info bottom--space-0_3">transport: €{sum}</span>
      <span className="oldList-container__info">todal:  €{total}</span>
    </div>
  );
}

export default ListaCos;