import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducers from "./reducers";

const bidItems = localStorage.getItem("bidItems")
  ? JSON.parse(localStorage.getItem("bidItems"))
  : [];
const initState = { bid: { items: bidItems } };
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducers,
  initState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;