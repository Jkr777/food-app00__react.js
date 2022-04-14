

const INITIAL_STATE = {
  isAuth: false,
  user: {
    _id: "",
    nume: "",
    prenume: "",
    telefon: "",
    adresa: "",
    email: "",
    rol: ""
  }
}

const authReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default authReducer;