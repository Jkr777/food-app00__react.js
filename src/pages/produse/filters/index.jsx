function Filters({ handleFilterChange, categories, handleCategoryChange }) {
  return (
    <div className="filters-container">
      <span className="filters-container__title">filtre de cautare</span>

      <select defaultValue="Schimba categoria" name="categorii" className="input-search bottom--space-1_5" onChange={handleCategoryChange}>
        <option value="Schimba categoria" disabled>Schimba categoria</option>
        {categories.map(c => <option key={c.nume} value={c.nume}>{c.nume}</option>)}
      </select>       
      
      <select name="pret" className="input-search bottom--space-1_5" onChange={handleFilterChange}>
        <option value="1">Pret, mic mare</option>
        <option value="-1">Pret, mare mic</option>
      </select>      
      
      <select name="date" className="input-search" onChange={handleFilterChange}>
        <option value="-1">Sortare, cele mai recente</option>
        <option value="1">Sortare, cele mai vechi</option>
      </select>
    </div>
  );
}

export default Filters;