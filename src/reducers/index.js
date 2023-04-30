import { combineReducers } from "redux";
import vehicleReducers from "./vehicleReducers";
import bidReducers from "./bidReducers";

export default combineReducers({
  vehicles: vehicleReducers,
  bid: bidReducers,
});
