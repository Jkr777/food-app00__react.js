

const INITIAL_STATE = {
  _id: "",
  imgUrl: "https://images.unsplash.com/photo-1551135020-39e4ca508d9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  nume: "Carnati de porc afumati",
  descriere: "Un produs traditional romanesc numai bun de pus in tigaie sau pe gratar. Produs afumat si vidat. Ingrediente: carne porc 60,3%, slanina, proteina vegetala din SOIA, apa, sare, condimente (usturoi, piper negru, coriandru, cimbru, TELINA, boia dulce).",
  cantitate: 1,
  kg: 1,
  pret: 12
}

const produsReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default produsReducer;