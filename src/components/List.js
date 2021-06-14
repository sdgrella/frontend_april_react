import { useState } from "react";

function List(props) {
  const { list } = props;

  return (
    <div className="list">
      {list.map((item, index) => {
        return (
          <div key={item + index} className="list-item">
            {item}
          </div>
        );
      })}
    </div>
  );
}

export default List;
