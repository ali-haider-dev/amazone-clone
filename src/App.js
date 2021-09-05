import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Header from './component/header/Header';
import Home from './component/home/Home';

function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/checkout">
            <Header />
            <h1>Checkout Page</h1>
          </Route>
          <Route path="/login">
            <h1> LogIn Page</h1>
            <Link to="/">
              <button>Go back to home page</button>
            </Link>
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
