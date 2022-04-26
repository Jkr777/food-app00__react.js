import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from 'react-router-dom';
import Filters from "./filters";
import ProductsList from "./productsList";

function Produse() {
  const [filter, changeFilter] = useState({
    pret: 1,
    date: -1
  });
  const { id } = useParams();
  const navigate = useNavigate();
  const [category, changeCategory] = useState();

  const products = useSelector(state => state.produse.listaProduse);
  const categories = useSelector(state => state.categorii.lista);

  const handleFilterChange = e => changeFilter(prev => ({...prev, [e.target.name]: Number(e.target.value) }));
  const handleCategoryChange = e => navigate(`/produse/${e.target.value}`); 

  useEffect(() => {
    changeCategory(id)
  }, [id])

  return (
    <section className="products-container">
      <Filters handleFilterChange={handleFilterChange} categories={categories} handleCategoryChange={handleCategoryChange} />
      <ProductsList products={products} category={category} />
    </section>
  );
}

export default Produse;