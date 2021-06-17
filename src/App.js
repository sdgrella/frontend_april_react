import { useEffect, useState } from "react";
import "./App.css";
import Title from "./components/Title.js";
import Form from "./components/Form.js";
import List from "./components/List.js";
import { getDate } from "./lib/functions";

function App() {
  const [title, setTitle] = useState();
  const [subtitle, setSubtitle] = useState();
  const [datesArray, setDatesArray] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setTitle("this is the title");
    }, [1000]);
  }, []);

  useEffect(() => {
    if (title) {
      console.log(title);
      setTimeout(() => {
        setSubtitle("I'm the subtitle");
      }, [1000]);
    }
  }, [title]);

  useEffect(() => {
    if (subtitle) {
      console.log("subtitle", subtitle);
    }
  }, [subtitle]);

  useEffect(() => {
    console.log(datesArray);
  }, [datesArray]);

  return (
    <div className="page-wrapper">
      <Title title={title} whateverWeWant={subtitle} />
      <div className="section-one">
        <Form setDatesArray={setDatesArray} />
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
