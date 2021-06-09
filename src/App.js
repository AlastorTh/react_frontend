import React from "react";
import "./App.css";
import Todos from "./Todos";
import Todo from "./Todo";
import Info from "./Info";
import Create from "./create";
import Update from "./Update";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" children={<Info />} />
          <Route path="/todos" children={<Todos />} />
          <Route path="/todo/:id" children={<Todo />} />
          <Route path="/create" children={<Create />} />
          <Route
            path="/update/:id"
            render={(props) => <Update {...props} />}
            //children={<Update />}
          />
        </Switch>
      </Router>
    </div>
  );
}
