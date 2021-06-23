import "../App.css";
import { Link } from "react-router-dom";
import List from "./List";

function Success() {
  return (
    <>
      <div>This is the success page</div>
      <Link to="/">Home</Link>
      <List type="dates" />
    </>
  );
}

export default Success;
