import { useEffect } from "react";
import "../App.css";

function Title(props) {
  const { title, whateverWeWant } = props;

  // useEffect(() => {
  //   console.log(props);
  // }, []);

  return (
    <>
      <div className="title">{title}</div>
      <div>{whateverWeWant}</div>
    </>
  );
}

export default Title;
