function Category({ nume, imgUrl }) {
  return (
    <div className="category-container">
      <img className="category-container__img" src={imgUrl} />
      <span className="category-container__name">{nume}</span>
    </div>
  );
}

export default Category;