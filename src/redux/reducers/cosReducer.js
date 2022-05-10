const INITIAL_STATE = {
  total: 60,
  produse: [
    {
      _id: 1,
      imgUrl: "https://images.unsplash.com/photo-1551135020-39e4ca508d9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      nume: "Carnati de porc afumati",
      cantitate: 1,
      pret: 12
    }, {
      _id: 2,
      imgUrl: "https://images.unsplash.com/photo-1551135020-39e4ca508d9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      nume: "Carnati de porc afumati",
      cantitate: 1,
      pret: 24
    },{
      _id: 4,
      imgUrl: "https://images.unsplash.com/photo-1551135020-39e4ca508d9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      nume: "Carnati de porc afumati",
      cantitate: 2,
      pret: 37
    },
  ]
}

const cosReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default cosReducer;