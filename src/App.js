import React from "react";
import { Provider } from "react-redux";
import Vehicles from "./components/Vehicles";
import Filter from "./components/Filter";
import Basket from "./components/Basket";
import store from "./store";
import "./App.css";
import { Grid } from "@material-ui/core";
// import Pagination from './components/Pagination/Pagination';
// import { Paper } from '@material-ui/core';
// import useStyles from './components/Pagination/styles';
// import { useLocation } from 'react-router-dom';

// function useQuery() {
//   return new URLSearchParams(useLocation().search);
// }

const App = () => {
  // const classes = useStyles();
  // const query = useQuery();
  // const page = query.get('page') || 1;
  // const page = 1;
  return (
    <Provider store={store}>
      <div className="container">
        <h1>Vehicle Bidding Application</h1>
        <hr />
        <Grid container spacing={3}>
          <Grid item xs={12} md={9}>
            <Filter />
            <hr />
            <Vehicles />
          </Grid>
          <Grid item xs={12} md={3}>
            <Basket />
          </Grid>
        </Grid>
            {/* <Paper className={classes.pagination} elevation={6}>
              <Pagination page={page} />
            </Paper> */}
      </div>
    </Provider>
  );
};

export default App;
