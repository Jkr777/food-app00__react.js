import Product from "./product";

function ProductsList({ products, category }) {
  return (
    <div className="productsList-container">
      <span className="category-name">{category}</span>
      <div className="productsList-container__list">
        {products.map(p => <Product key={p._id} {...p} />)}
        <p className="productsList-container__last-item"></p>
      </div>
      <span className="more__link">mai multe</span>
    </div>
  );
}

export default ProductsList;