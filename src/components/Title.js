import { useState } from "react";

function Title(props) {
  const { title } = props;

  return <div className="title">{title}</div>;
}

export default Title;
