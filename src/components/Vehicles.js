import React, { useEffect } from "react";
import { connect } from "react-redux";
import { addToBid } from "../actions/bidActions";
import { fetchVehicles } from "../actions/vehiclesActions";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";

const Vehicles = ({ vehicles, bidItems, fetchVehicles, addToBid, handleAddToBid }) => {
  useEffect(() => {
    fetchVehicles();
  }, [fetchVehicles]);

  const vehicleItems = vehicles.map((vehicle) => (
    <div className="col-md-4" key={vehicle.id}>
      <Card>
        <CardMedia
          component="img"
          alt={vehicle.name}
          height="200"
          image={vehicle.details.image}
          name={vehicle.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2">
            {vehicle.name}
          </Typography>
          <Typography gutterBottom variant="h6" component="h2">
            {vehicle.details.description}
          </Typography>
          {/* <b>{util.formatCurrency(vehicle.price)}</b> */}
          <div>
            <div>
              <TextField required></TextField>
            </div>
            <div>
              LKR
            </div>
          </div>

          <Button
            variant="contained"
            color="primary"
            onClick={(e) => handleAddToBid(e, vehicle)}
          >
            submit
          </Button>
        </CardContent>
      </Card>
    </div>
  ));

  return <div className="row">{vehicleItems}</div>;
};

const mapStateToProps = (state) => ({
  vehicles: state.vehicles.filteredItems,
  bidItems: state.bid.items,
});

export default connect(mapStateToProps, { fetchVehicles, addToBid })(Vehicles);
