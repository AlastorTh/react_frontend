import React from "react";
import { useHttp } from "./httpHook";
import { useState } from "react";

const Update = (props) => {
  console.log(props);
  const { ID, title, description, completed } = props.location.AboutTodo;
  const [form, setForm] = useState({
    userID: 0,
    title: "",
    description: "",
    сompleted: false,
  });

  const { request } = useHttp();
  const dataFunc = async () => {
    try {
      form.userID = parseInt(form.userID);
      if (form.completed === "yes") {
        form.completed = true;
      } else {
        form.completed = false;
      }
      console.log(form);
      const data = await request(
        `http://localhost:8080/api/task/${ID}`,
        "PATCH",
        {
          ...form,
        }
      );
      console.log(data);
    } catch {}
  };

  const changeHandler = (event) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  };
  return (
    <div>
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
                  <li>
                    <a class="grey-text text-lighten-3" href="#!">
                      Find one
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
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input
                onChange={changeHandler}
                id="userID"
                type="number"
                class="validate"
              ></input>
              <label className="active">Id</label>
            </div>
            <div className="input-field col s6">
              <input
                onChange={changeHandler}
                id="title"
                type="text"
                class="validate"
              ></input>
              <label className="active">Task Title</label>
            </div>
          </div>
          <div className="input-field col s12">
            <input
              onChange={changeHandler}
              id="description"
              type="text"
              class="validate"
            ></input>
            <label className="active">Description</label>
          </div>
          <label>Completed?</label>
          <select
            id="completed"
            onChange={changeHandler}
            class="browser-default"
          >
            <option value="yes">yes</option>
            <option value="no">no</option>
          </select>
        </form>
        <button
          onClick={dataFunc}
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Update;
