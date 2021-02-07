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

function App() {
  return (
    <Router>
      <Switch>

        <Route path="/home">
          <Home></Home>
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
