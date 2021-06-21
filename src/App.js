import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home.js";
import Success from "./components/Success.js";
import User from "./components/User.js";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/users/:id" component={User} />
          <Route exact path="/success" component={Success} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
