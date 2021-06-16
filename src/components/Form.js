import { useEffect, useState } from "react";
import "../App.css";

function Form(props) {
  const { setDatesArray } = props;
  const [inputValue, setInputValue] = useState();

  useEffect(() => {
    console.log(inputValue);
  }, [inputValue]);

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    setDatesArray((prevState) => {
      return [inputValue, ...prevState];
    });
  };

  const showElements = () => {
    return <div>Hi</div>;
  };

  return (
    <>
      <input type="date" onInput={handleInput} />
      <div onClick={handleClick} className="input-button">
        Add
      </div>
      {showElements()}
    </>
  );
}

export default Form;
