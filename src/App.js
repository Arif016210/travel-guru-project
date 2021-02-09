import React, { createContext, useState } from "react";
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
import Registration from "./components/Login/Registration";
import HotelInfo from "./components/HotelInfo/HotelInfo";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";


export const UserContext = createContext()



function App() {

  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
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

          <Route path="/regi">
            <Registration></Registration>
          </Route>

          <PrivateRoute path="/hotel">
            <HotelInfo></HotelInfo>
          </PrivateRoute>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="*">
            <Error></Error>
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
