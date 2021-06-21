import "../App.css";
import { Link } from "react-router-dom";

function Success() {
  return (
    <>
      <div>This is the success page</div>
      <Link to="/">Home</Link>
    </>
  );
}

export default Success;
