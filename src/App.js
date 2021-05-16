import React, {useState, useEffect} from 'react';
import axios from 'axios';

import "./App.css";
// import the Container Component from the semantic-ui-react
//import { Container } from "semantic-ui-react";
// import the ToDoList component
//import ToDoList from "./To-Do-List";


export default function App() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/api/task')
      .then(response => {
        //console.log(response)
        console.log(response.data)
        var JSONdata = JSON.stringify(response.data)
        console.log(JSONdata)
        //const list = JSONdata.map(one => <div>{one}</div>)
        //console.log(list)
        setProduct(JSONdata)
        //setProduct())
        //setProduct(response || "NO DATA")
      })
  }, [])

  return (
    <div className="App">
      <h1>Sup</h1>
      <h2>bruh</h2>
      <p>
        {product}
      </p>
    </div>
  );
}

