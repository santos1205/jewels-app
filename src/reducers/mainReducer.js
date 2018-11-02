import { combineReducers } from "redux";
import listaKitReducer from "./listaKitReducer";

const reducer = combineReducers({
  listaKit: listaKitReducer
});

export default reducer;
