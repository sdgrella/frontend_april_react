import { useContext } from "react";
import "../App.css";
import AppContext from "../context/AppContext";

function List(props) {
  const appContext = useContext(AppContext);
  const { type } = props;
  const handleDeleteItem = (e) => {
    const filteredArray = appContext.datesArray.filter((messageItem) => {
      return messageItem.id !== e.target.id;
    });
    appContext.setDatesArray(filteredArray);
  };

  return (
    <>
      <div>This is the List</div>

      {type === "dates" && (
        <div className="list">
          {appContext.datesArray.map((date, index) => {
            return (
              <div key={date.id} className="list-item">
                <div>{date.message}</div>
                <div>{date.status}</div>
                <div>{date.date}</div>
                <div
                  id={date.id}
                  className="delete-button"
                  onClick={handleDeleteItem}
                >
                  Delete
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default List;
