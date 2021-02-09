import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Error from "./components/Error/Error";
import Booking from "./components/Booking/Booking";
import Login from "./components/Login/Login";

function App() {
  return (
    <Router>
      <Switch>

        <Route path="/home">
          <Home></Home>
        </Route>

        <Route path="/booking/:areaID">
          <Booking></Booking>
        </Route>

        <Route path="/login">
          <Login></Login>
        </Route>

        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route path="*">
          <Error></Error>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
