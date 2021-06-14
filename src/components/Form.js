import { useState } from "react";

function Form(props) {
  const { setList } = props;
  const [formData, setFormData] = useState();

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const handleClick = () => {
    setList((prevList) => [...prevList, formData]);
  };

  return (
    <div className="form">
      <input type="date" className="input-date" onInput={handleChange} />
      <button className="input-button" onClick={handleClick}>
        Add
      </button>
    </div>
  );
}

export default Form;
