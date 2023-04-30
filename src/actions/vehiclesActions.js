import {
  FETCH_VEHICLES,
  FILTER_VEHICLES_BY_BRAND,
} from "./types";

export const fetchVehicles = () => (dispatch) => {
  fetch("http://157.245.61.32:7979/vehicles")
    .then((res) => res.json())
    .catch((err) =>
      fetch("db.json")
        .then((res) => res.json())
        .then((data) => data.vehicles)
    )
    .then((data) => {
      dispatch({ type: FETCH_VEHICLES, payload: data });
    });
};

export const filterVehicles = (vehicles, brand) => (dispatch) => {
  dispatch({
    type: FILTER_VEHICLES_BY_BRAND,
    payload: {
      brand: brand,
      items:
        brand === ""
          ? vehicles
          : vehicles.filter(
              (x) => x.availablebrands.indexOf(brand.toUpperCase()) >= 0
            ),
    },
  });
};

