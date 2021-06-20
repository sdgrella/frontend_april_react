import { useEffect, useState } from "react";
import "./App.css";
import Title from "./components/Title.js";
import Form from "./components/Form.js";
import List from "./components/List.js";
import Alert from "./components/Alert.js";

function App() {
  const [title, setTitle] = useState();
  const [subtitle, setSubtitle] = useState();
  const [datesArray, setDatesArray] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

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
      setShowAlert(false);
    }, [2000]);

    if (showAlert) {
      setTitle("New title");
    } else if (!showAlert && title !== "") {
      setTitle("Old title");
    }
  }, [showAlert]);

  return (
    <div className="page-wrapper">
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

export default App;
