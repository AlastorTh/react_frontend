import React from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Todo = () => {
  const { id } = useParams();
  const urlParams = new URLSearchParams(window.location.search);
  return (
    <div>
      <h1>{`ID: ${id}`}</h1>
      <h1>{`title: ${urlParams.get("title")}`}</h1>
      <h1>{`description: ${urlParams.get("description")}`}</h1>
      <h1>{`completed: ${urlParams.get("completed")}`}</h1>
      <Link to="/todos" className="btn btn-primary">
        Go Back
      </Link>
      <Link
        to={{
          pathname: `/update/${id}`,
          aboutTodo: {
            ID: id,
            title: urlParams.get("title"),
            description: urlParams.get("description"),
            completed: urlParams.get("completed"),
          },
        }}
        className="btn btn-primary"
      >
        UNIMPLEMENTED UPDATE
      </Link>
    </div>
  );
};

export default Todo;
