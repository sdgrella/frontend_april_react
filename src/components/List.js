import "../App.css";

function List(props) {
  const { datesArray } = props;
  return (
    <>
      {props.type === "dates" && (
        <div>
          {datesArray.map((date, index) => {
            return <div key={date + index}>{date}</div>;
          })}
        </div>
      )}
    </>
  );
}

export default List;
