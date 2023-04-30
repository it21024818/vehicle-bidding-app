import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addToBid } from "../actions/bidActions";
import { fetchVehicles } from "../actions/vehiclesActions";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Vehicles = ({ vehicles, bidItems, fetchVehicles, addToBid, handleAddToBid }) => {
  useEffect(() => {
    fetchVehicles();
  }, [fetchVehicles]);

  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { value } = e.target;
    const onlyNums = value.replace(/[^0-9]/g, "");
    setInputValue(onlyNums);
  };

  const handleSnackbarClose = () => {
    setError(null);
  };

  const handleAddToBidWithValidation = (e, vehicle) => {
    e.preventDefault();
    const minValue = vehicle.details.price;
    if (parseInt(inputValue) < minValue) {
      setError(`Bid amount should be greater than or equal to LKR ${minValue}`);
    } else {
      handleAddToBid(e, vehicle);
      setInputValue("");
    }
  };

  const vehicleItems = vehicles.map((vehicle) => (
    <div className="col-md-4" key={vehicle.id}>
      <Card>
        <CardMedia component="img" alt={vehicle.name} height="200" image={vehicle.details.image} name={vehicle.name} />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2">
            {vehicle.name} {vehicle.details.brand} {vehicle.details.manufactureYear}
          </Typography>
          <Typography gutterBottom variant="h6" component="h2">
            {vehicle.details.description}
          </Typography>
          {/* <b>{util.formatCurrency(vehicle.price)}</b> */}
          <div>
            <div>
              <TextField
                required
                value={inputValue}
                onChange={handleInputChange}
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              />
            </div>
            <div>LKR</div>
          </div>

          <Button variant="contained" color="primary" onClick={(e) => handleAddToBidWithValidation(e, vehicle)} disabled={!inputValue.trim()}>
            submit
          </Button>
        </CardContent>
      </Card>
    </div>
  ));

  return (
    <div className="row">
      {vehicleItems}
      <Snackbar open={error !== null} autoHideDuration={3000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity="error">
          {error}
        </Alert>
      </Snackbar>
    </div>
  );
};

const mapStateToProps = (state) => ({
  vehicles: state.vehicles.filteredItems,
  bidItems: state.bid.items,
});

export default connect(mapStateToProps, { fetchVehicles, addToBid })(Vehicles);
