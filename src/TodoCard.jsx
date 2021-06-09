import React from "react";

import { useHistory } from "react-router-dom";
const TodoCard = (props) => {
  const { todo } = props;
  const { id, title, description, completed } = todo;
  let history = useHistory();

  const boolParse = () => {
    if (completed === true) {
      return "yes";
    }
    return "no";
  };
  return (
    <div
      style={{
        backgroundColor: "grey",
        margin: "10px",
        padding: "15px",
        width: "150px",
      }}
      onClick={() =>
        history.push(
          `/todo/${id}?title=${title}&description=${description}&completed=${completed}`
        )
      }
    >
      <h4>{title}</h4>
      <h6>{`Completed: ${boolParse()}`}</h6>
    </div>
  );
};

export default TodoCard;
