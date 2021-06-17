import "../App.css";

function List(props) {
  const { datesArray, setDatesArray } = props;
  const handleDeleteItem = (e) => {
    console.log(e.target.id);
    const filteredArray = datesArray.filter((messageItem) => {
      return messageItem.id !== e.target.id;
    });
    setDatesArray(filteredArray);
  };

  return (
    <>
      {props.type === "dates" && (
        <div className="list">
          {datesArray.map((date, index) => {
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
