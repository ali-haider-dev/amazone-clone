import { useEffect } from 'react';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Header from './component/header/Header';
import Home from './component/home/Home';
import Checkout from './component/checkout/Checkout';
import Login from './component/login/Login';
import { useStateValue } from "./component/stateProvider/stateProvider";
import { auth } from './config/firebase';


function App() {

  const [{ user }, dispatch] = useStateValue()
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(function (Authuser) {
      if (Authuser) {
        // User is signed in.
        dispatch({
          type: "SET_USER",
          user: Authuser
        })
      } else {
        // User is signed out.
        dispatch({
          type: "SET_USER",
          user: null
        })
      }

      return (() => {
        //any cleanup operation go in here
        unsubscribe()
      })
    });

  }, [])
  console.log("user>>>" + user);
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
