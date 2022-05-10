import OldListItems from "./oldListItems";

function OldList({ data, total, produse }) {
  return (
    <div className="oldList-container">
      <span className="oldList-container__info">{data}</span>
      {produse.map(p => <OldListItems key={p._id} {...p} />)}
      <span className="oldList-container__info">total: €{total}</span>
    </div>
  );
}

export default OldList;