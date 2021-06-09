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
      responseTodos.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
      setTodos(responseTodos);
    });
  }, []);

  console.log(todos);
  return (
    <>
      <div>
        <footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="#aa00ff purple-text text-accent-4">
                  Курсовая по ИТ
                </h5>
                <p class="#aa00ff purple-text text-accent-4">
                  Интерактивный список дел
                </p>
                <p class="#aa00ff purple-text text-accent-4">
                  Разработчик: Касаткин А.С. 324Б-18
                </p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                  <li>
                    <a class="grey-text text-lighten-3" href="/">
                      About
                    </a>
                  </li>
                  <li>
                    <a class="grey-text text-lighten-3" href="/create">
                      Add one
                    </a>
                  </li>
                  <li>
                    <a class="grey-text text-lighten-3" href="/todos">
                      List all
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">© 2021 MEME Made by MAI GANG</div>
          </div>
        </footer>
      </div>
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
