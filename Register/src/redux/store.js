import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import userReducer from "./someReducer";
import someReducer from "./userActions";

const rootReducer = combineReducers({
  user: userReducer,
  some: someReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
