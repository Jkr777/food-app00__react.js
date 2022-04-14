

const INITIAL_STATE = {
  comanda: [
  {
    produse: [
      {
        nume:  "Carnati de porc afumati",
        cantitate: 5,
        pret: 10
      },    {
        nume:  "Mici Mateiu",
        cantitate: 5,
        pret: 10
      },
  
    ],
    totalPret: 120,
    totalCantitate: 10,
    data: "acum 5 zile"
    },  {
    produse: [
      {
        nume:  "Carnati de porc afumati",
        cantitate: 5,
        pret: 10
      },    {
        nume:  "Mici Mateiu",
        cantitate: 5,
        pret: 10
      },
  
    ],
    totalPret: 120,
    totalCantitate: 10,
    data: "acum 5 zile"
   },
  ]
}

const comandaReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default comandaReducer;