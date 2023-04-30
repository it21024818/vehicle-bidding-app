import React from "react";
import { connect } from "react-redux";
import { addToBid } from "../actions/bidActions";

const Basket = ({ bidItems, addToBid }) => {
  const handleCheckout = () => {
    alert("Todo: Implement checkout page.");
  };

  return (
    <div className="alert alert-info">
      {bidItems.length === 0 ? (
        "Basket is empty"
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
            Sum:{" "}
            {/* {util.formatCurrency(
              bidItems.reduce((a, c) => a + c.price * c.count, 0)
            )} */}
          </b>
          <button onClick={handleCheckout} className="btn btn-primary">
            checkout
          </button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  bidItems: state.bid.items,
});

export default connect(mapStateToProps, { addToBid })(Basket);
