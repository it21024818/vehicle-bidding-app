/* eslint-disable import/no-anonymous-default-export */
import { ADD_TO_BID } from "../actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case ADD_TO_BID:
      return { ...state, items: action.payload.bidItems };
    default:
      return state;
  }
}
