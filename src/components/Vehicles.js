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
import Grid from "@material-ui/core/Grid";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Vehicles = ({ vehicles, bidItems, fetchVehicles, addToBid }) => {
  useEffect(() => {
    fetchVehicles();
  }, [fetchVehicles]);

  const [inputValues, setInputValues] = useState({});
  const [error, setError] = useState(null);
  
  const handleInputChange = (e, vehicleId) => {
    const { value } = e.target;
    const onlyNums = value.replace(/[^0-9]/g, "");
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [vehicleId]: onlyNums,
    }));
  };

  const handleSnackbarClose = () => {
    setError(null);
  };

  const handleAddToBid = (e, vehicle) => {
    e.preventDefault();
    const minValue = vehicle.details.price;
    const inputValue = inputValues[vehicle.id] || "";
    if (parseInt(inputValue) < minValue) {
      setError(`Bid amount should be greater than or equal to LKR ${minValue}`);
    } else {
      addToBid(vehicle, inputValue);
      setInputValues((prevInputValues) => ({
        ...prevInputValues,
        [vehicle.id]: "",
      }));
    }
  };

  const vehicleItems = vehicles.map((vehicle) => (
    <Grid item xs={12} sm={6} md={3} key={vehicle.id}>
      <Card>
        <CardMedia component="img" alt={vehicle.name} height="200" image={vehicle.details.image} name={vehicle.name} />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2">
            {vehicle.name} {vehicle.details.brand} {vehicle.details.manufactureYear}
          </Typography>
          <Typography gutterBottom variant="h6" component="h2">
            {vehicle.details.description}
          </Typography>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>
              <TextField
                required
                value={inputValues[vehicle.id] || ""}
                onChange={(e) => handleInputChange(e, vehicle.id)}
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              />
            </div>
            <div style={{ marginLeft: "5px" }}>LKR</div>
          </div>
          <br></br>
          <Button variant="contained" color="primary" onClick={(e) => handleAddToBid(e, vehicle)} disabled={!inputValues[vehicle.id]?.trim()}>
            submit
          </Button>
        </CardContent>
      </Card>
    </Grid>
  ));

  return (
    <Grid container spacing={3}>
      {vehicleItems}
      <Snackbar open={error !== null} autoHideDuration={3000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity="error">
          {error}
        </Alert>
      </Snackbar>
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  vehicles: state.vehicles.filteredItems,
  bidItems: state.bid.items,
});

export default connect(mapStateToProps, { fetchVehicles, addToBid })(Vehicles);
