import React from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useHttp } from "./httpHook";

const Register = () => {
  const { request } = useHttp();
  const DeleteFunc = async (event) => {
    let toDelete = event.target.value;
    console.log("Delete this: ", toDelete);
    try {
      const data = await request(
        `http://localhost:8080/api/task/${id}`,
        "DELETE"
      );
    } catch {}
  };
  const { id } = useParams();
  const urlParams = new URLSearchParams(window.location.search);
  const boolParse = (a) => {
    if (a === true) {
      return "yes";
    }
    return "no";
  };
  return (
    <div>
      <h1>{`title: ${urlParams.get("title")}`}</h1>
      <h1>{`description: ${urlParams.get("description")}`}</h1>
      <h1>{`completed: ${boolParse(urlParams.get("completed"))}`}</h1>
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
        UPDATE
      </Link>
      <Link
        onClick={DeleteFunc}
        to={{
          pathname: `/todos`,
        }}
        className="btn btn-primary"
      >
        DELETE
      </Link>
    </div>
  );
};

export default Register;