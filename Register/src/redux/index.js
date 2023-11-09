// redux/reducers/index.js
import { combineReducers } from "redux";
import someReducer from "./someReducer"; // Importer andre reducere

const rootReducer = combineReducers({
  some: someReducer,
  // Legg til andre reducere her
});

export default rootReducer;
