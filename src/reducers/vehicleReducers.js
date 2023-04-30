/* eslint-disable import/no-anonymous-default-export */
import {
  FETCH_VEHICLES,
  FILTER_VEHICLES_BY_BRAND,
} from "../actions/types";

const initState = { items: [], filteredItems: [], brand: ""};
export default function (state = initState, action) {
  switch (action.type) {
    case FETCH_VEHICLES:
      return { ...state, items: action.payload, filteredItems: action.payload };
    case FILTER_VEHICLES_BY_BRAND:
      return {
        ...state,
        filteredItems: action.payload.items,
        brand: action.payload.brand,
      };
      
    default:
      return state;
  }
}
