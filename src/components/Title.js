import { useContext } from "react";
import "../App.css";
import AppContext from "../context/AppContext";

function Title() {
  const appContext = useContext(AppContext);

  return (
    <>
      <div className="title">{appContext.title}</div>
      <div className="subtitle">{appContext.subtitle}</div>
    </>
  );
}

export default Title;
