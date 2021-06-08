import React from "react";

import { useHistory } from "react-router-dom";
const TodoCard = (props) => {
  const { todo } = props;
  const { id, title, description, completed } = todo;
  let history = useHistory();
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
      <h6>{`Completed: ${completed}`}</h6>
    </div>
  );
};

export default TodoCard;
