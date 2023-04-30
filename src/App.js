import React, { Component } from "react";
import { Provider } from "react-redux";
import Vehicles from "./components/Vehicles";
import Filter from "./components/Filter";
import Basket from "./components/Basket";
import store from "./store";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <h1>Vehicle Bidding Application</h1>
          <hr />
          <div className="row">
            <div className="col-md-9">
              <Filter />
              <hr />
              <Vehicles />
            </div>
            <div className="col-md-3">
              <Basket />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
