import React from "react";
import "./App.css";
import Info from "./Info";
import Create from "./create";
import Update from "./Update";
import Register from "./Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" children={<Info />} />
          <Route path="/create" children={<Create />} />
          <Route path="/register" children={<Register />} />
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
