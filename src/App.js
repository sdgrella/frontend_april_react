import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home.js";
import Success from "./components/Success.js";
import User from "./components/User.js";
import Form from "./components/Form.js";
import { getUser } from "./lib/database";
import { useEffect, useState } from "react";
import AppContext from "./context/AppContext";
import PrivateRoute from "./components/Auth/PrivateRoute.js";

function App() {
  const [title, setTitle] = useState("Frontend To Do List");
  const [subtitle, setSubtitle] = useState("Doing frontend things");
  const [datesArray, setDatesArray] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [user, setUser] = useState("");

  useEffect(() => {
    console.log("User: ", user);
    getUser()
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setUser(data);
        }, [2000]);
      });
  }, [user]);

  return (
    <>
      <Router>
        <AppContext.Provider
          value={{
            user: user,
            title: title,
            setTitle: setTitle,
            subtitle: subtitle,
            setSubtitle: setSubtitle,
            datesArray: datesArray,
            setDatesArray: setDatesArray,
            showAlert: showAlert,
            setShowAlert: setShowAlert,
          }}
        >
          <Switch>
            <Route exact path="/users/:id" component={User} />
            <Route exact path="/success" component={Success} />
            <PrivateRoute exact path="/form" component={Form} />
            <Route exact path="/" component={Home} />
          </Switch>
        </AppContext.Provider>
      </Router>
    </>
  );
}

export default App;
