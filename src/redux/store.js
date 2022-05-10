import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import authReducer from "./reducers/authReducer";
import categoriiReducer from "./reducers/categoriiReducer";
import produseReducer from "./reducers/produseReducer";
import produsReducer from "./reducers/produsReducer";
import comandaReducer from "./reducers/comandaReducer";
import istoricReducer from "./reducers/istoricReducer";
import cosReducer from "./reducers/cosReducer";


const store = createStore(combineReducers({
  auth: authReducer,
  categorii: categoriiReducer,
  produse: produseReducer,
  produs: produsReducer,
  comanda: comandaReducer,
  istoric: istoricReducer,
  cos: cosReducer
}), composeWithDevTools(applyMiddleware(thunk)));

export default store;