import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
// import the Container Component from the semantic-ui-react
//import { Container } from "semantic-ui-react";
// import the ToDoList component
//import ToDoList from "./To-Do-List";

const fetchAPI = () => {
  return axios.get("http://localhost:8080/api/task").then((res) => {
    console.log(res);
    var JSONdata = JSON.stringify(res.data);
    return JSONdata;
  });
};
export default function App() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchAPI().then((pr) => {
      setProduct(pr || "NO DATA!");
    });
  }, []);

  return (
    <div className="App">
      <h1>Sup</h1>
      <h2>bruh</h2>
      <pre>{product}</pre>
    </div>
  );
}
