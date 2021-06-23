import { useEffect, useState, useContext } from "react";
import { Redirect, Link } from "react-router-dom";
import "../App.css";
import Title from "./Title.js";
import Form from "./Form.js";
import List from "./List.js";
import Alert from "./Alert.js";
import AppContext from "../context/AppContext";

function Home() {
  const appContext = useContext(AppContext);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (appContext.showAlert) {
        appContext.setShowAlert(false);
        setRedirect(true);
      }
    }, [2000]);
  }, [appContext.showAlert]);

  useEffect(() => {
    console.log("from the Home component", appContext.user);
  }, [appContext.user]);

  // const checkType = () => {
  //   if (!props.type) {
  //     return (
  //       <>
  //         <Form setShowAlert={setShowAlert} />
  //         <List type="dates" />
  //       </>
  //     );
  //   } else if (props.type === "form") {
  //     return <Form />;
  //   } else if (props.type === "list") {
  //     return <List />;
  //   }
  // };

  return (
    <div className="page-wrapper">
      {redirect && <Redirect to="/success" />}
      {appContext.showAlert && <Alert />}
      <Title />
      {/* {props && checkType()} */}
      {appContext.user && (
        <>
          <div className="section-one">
            <Form />
            <List type="dates" />
          </div>
          <Link to="/form">Form</Link>
        </>
      )}
    </div>
  );
}

export default Home;
