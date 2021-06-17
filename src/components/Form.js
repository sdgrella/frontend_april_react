import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../App.css";

function Form(props) {
  const { setDatesArray } = props;
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");
  const [formData, setFormData] = useState({});
  const [isDisabled, setIsDisabled] = useState(true);

  const handleInputMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleInputStatus = (e) => {
    setStatus(e.target.value);
  };

  const handleInputDate = (e) => {
    setDate(e.target.value);
  };

  useEffect(() => {
    setFormData({
      message: message,
      status: status,
      date: date,
      id: uuidv4(),
    });
  }, [message, status, date]);

  useEffect(() => {
    console.log(formData);
    if (formData.message && formData.status && formData.date) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [formData]);

  useEffect(() => {
    console.log(isDisabled);
  }, [isDisabled]);

  const handleClick = () => {
    setDatesArray((prevState) => {
      return [formData, ...prevState];
    });
    setFormData({});
    setMessage("");
    setStatus("");
    setDate("");
  };

  return (
    <div className="form">
      <input
        type="text"
        value={message}
        className="input-date"
        onInput={handleInputMessage}
      />
      <input
        type="text"
        value={status}
        className="input-date"
        onInput={handleInputStatus}
      />
      <input
        type="date"
        value={date}
        className="input-date"
        onInput={handleInputDate}
      />
      <button
        disabled={isDisabled}
        className={`input-button input-button-${isDisabled}`}
        onClick={handleClick}
      >
        Add
      </button>
    </div>
  );
}

export default Form;
