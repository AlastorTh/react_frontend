import React from "react";

const TodoCard = (props) => {
  const { todo } = props;
  const { title, completed } = todo;
  return (
    <div
      style={{
        backgroundColor: "grey",
        margin: "10px",
        padding: "15px",
        width: "150px",
      }}
    >
      <h4>{title}</h4>
      <h6>{`Completed: ${completed}`}</h6>
    </div>
  );
};

export default TodoCard;
