import React from "react";
import { connect } from "react-redux";
import { filterVehicles } from "../actions/vehiclesActions";

const Filter = ({ vehicles, filteredVehicles, brand, filterVehicles }) => {
  return (
    <div className="row">
      <div className="col-md-4">{`${filteredVehicles.length} vehicles found.`}</div>
      <div className="col-md-4">
        <label>
          Filter by Brand
          <select
            className="form-control"
            value={brand}
            onChange={(event) => {
              filterVehicles(vehicles, event.target.value);
            }}
          >
            <option value="">Select Brand</option>
            <option value="volkswagen">Volkswagen</option>
            <option value="audi">Audi</option>
            <option value="ford">Ford</option>
            <option value="mercedes">Mercedes</option>
            <option value="bmw">BMW</option>
          </select>
        </label>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  vehicles: state.vehicles.items,
  filteredVehicles: state.vehicles.filteredItems,
  brand: state.vehicles.brand,
});

export default connect(mapStateToProps, { filterVehicles })(Filter);
