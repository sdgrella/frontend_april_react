import { useEffect, useState } from "react";

import { v4 as uuidv4 } from "uuid";
import "../App.css";
import Loader from "./Loader";
import { getDog, addMessage } from "../lib/database";

function Form(props) {
  const { setDatesArray, setShowAlert } = props;
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");
  const [formData, setFormData] = useState({});
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

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
    // fetch("https://dog.ceo/api/breeds/image/random")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //   });
  }, []);

  useEffect(() => {
    setFormData({
      message: message,
      status: status,
      date: date,
      id: uuidv4(),
    });
  }, [message, status, date]);

  useEffect(() => {
    if (formData.message && formData.status && formData.date) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [formData]);

  // useEffect(() => {
  //   console.log(isDisabled);
  // }, [isDisabled]);

  const handleClick = () => {
    setIsLoading(true);

    getDog()
      .then((response) => response.json())
      .then((dogData) => {
        console.log(dogData);

        let newObject = formData;
        // console.log(newObject);

        newObject["image"] = dogData.message;
        newObject["image_status"] = dogData.status;

        addMessage(newObject)
          .then((response) => response.json())
          .then((messageData) => {
            console.log(messageData);
            if (messageData === "Success") {
              setDatesArray((prevState) => {
                return [newObject, ...prevState];
              });
              setFormData({});
              setMessage("");
              setStatus("");
              setDate("");
              // console.log("done");
              setIsLoading(false);
              setShowAlert(true);
              // This is one way, but see App.js useEffect with showAlert in the
              // dependency array for another way
              // setTimeout(() => {
              //   setShowAlert(false);
              // }, [2000]);
            }
          });

        // setTimeout(() => {

        // }, [2000]);
      });
  };

  useEffect(() => {
    console.log("isLoading", isLoading);
  }, [isLoading]);

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
      {!isLoading && (
        <button
          disabled={isDisabled}
          className={`input-button input-button-${isDisabled}`}
          onClick={handleClick}
        >
          Add
        </button>
      )}
      {isLoading && <Loader />}
    </div>
  );
}

export default Form;
