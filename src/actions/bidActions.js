import { ADD_TO_BID } from "./types";

export const addToBid = (items, vehicle, bidAmount) => (dispatch) => {
  let bidItems = [];
  if (Array.isArray(items)) {
    bidItems = items.slice();
  }
  let vehicleAlreadyInBid = false;

  bidItems.forEach((cp) => {
    if (cp.id === vehicle.id) {
      cp.count += 1;
      vehicleAlreadyInBid = true;
    }
  });

  if (!vehicleAlreadyInBid) {
    bidItems.push({ ...vehicle, count: 1 });
  }
  localStorage.setItem("bidItems", JSON.stringify(bidItems));
  dispatch({ type: ADD_TO_BID, payload: { bidItems, bidAmount } });
};
