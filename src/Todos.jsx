import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { CircularProgress } from "@material-ui/core";
import TodoCard from "./TodoCard";

const endpoint = "http://localhost:8080/api";

const Todos = () => {
  const [todos, setTodos] = useState();
  useEffect(() => {
    axios.get(endpoint + "/task").then((res) => {
      const responseTodos = res.data;
      setTodos(responseTodos);
    });
  }, []);
  console.log(todos);
  return (
    <>
      {todos ? (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {todos.map((todo) => (
            <TodoCard todo={todo} />
          ))}
        </div>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default Todos;
