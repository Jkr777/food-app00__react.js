function OldListItems({ titlu, cantitate, pret }) {
  return (
    <div className="history-item">
      <span>{titlu}</span>
      <span>{cantitate}</span>
      <span>{pret}</span>
    </div>
  );
}

export default OldListItems;