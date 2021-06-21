import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

import "../App.css";
import Title from "./Title.js";
import Form from "./Form.js";
import List from "./List.js";
import Alert from "./Alert.js";

function Home() {
  const [title, setTitle] = useState();
  const [subtitle, setSubtitle] = useState();
  const [datesArray, setDatesArray] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    setTitle("this is the title");
  }, []);

  useEffect(() => {
    if (title) {
      setSubtitle("I'm the subtitle");
    }
  }, [title]);

  useEffect(() => {
    console.log("datesArray", datesArray);
  }, [datesArray]);

  useEffect(() => {
    console.log("showAlert", showAlert);

    setTimeout(() => {
      if (showAlert) {
        setShowAlert(false);
        setRedirect(true);
      }
    }, [2000]);

    if (showAlert) {
      setTitle("New title");
    } else if (!showAlert && title !== "") {
      setTitle("Old title");
    }
  }, [showAlert]);

  return (
    <div className="page-wrapper">
      {redirect && <Redirect to="/success" />}
      {showAlert && <Alert />}

      <Title title={title} whateverWeWant={subtitle} />
      <div className="section-one">
        <Form setDatesArray={setDatesArray} setShowAlert={setShowAlert} />
        <List
          type="dates"
          datesArray={datesArray}
          setDatesArray={setDatesArray}
        />
      </div>
    </div>
  );
}

export default Home;
