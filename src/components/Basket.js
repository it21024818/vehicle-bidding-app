import React from "react";
import { connect } from "react-redux";
import { addToBid } from "../actions/bidActions";

const Basket = ({ bidItems, addToBid }) => {

  // fetch("http://157.245.61.32:7979/vehicles").then(res => res.json())
  // .then(data => this.setState({
  //   vehicles: data,
  //   filteredVehicles: data
  // }))
  // if(localStorage.getItem('bidItems')){
  //   this.setState({bidItems: JSON.parse(localStorage.getItem('bidItems'))})
  // }

  return (
    <div className="alert alert-info">
      {bidItems.length === 0 ? (
        "No biddings"
      ) : (
        <div>
          You have {bidItems.length} items in the basket. <hr />
        </div>
      )}
      {bidItems.length > 0 && (
        <div>
          <ul style={{ marginLeft: -25 }}>
            {bidItems.map((item) => (
              <li key={item.id}>
                <b>{item.title}</b>
                <br />
                {/* {item.count} X {util.formatCurrency(item.price)} */}
              </li>
            ))}
          </ul>

          <b>
            Total:{" "}
            {/* {util.formatCurrency(
              bidItems.reduce((a, c) => a + c.price * c.count, 0)
            )} */}
          </b>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  bidItems: state.bid.items,
});

export default connect(mapStateToProps, { addToBid })(Basket);
