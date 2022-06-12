import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Header from "./MyComponents/Header";
import { Addtodo } from './MyComponents/Addtodo';
import Footer from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos";
import { About } from "./MyComponents/About";



function App() {
  let initTodo = [];
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  const onDelete = (item) => {

    setTodos(todos.filter((e) => {
      return e !== item;

    }));

  }

  const onAdd = (title, desc) => {
    console.log("Adding todo", title, desc)
    const sno = todos.length + 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,

    }
    setTodos([...todos, myTodo]);
    console.log(myTodo)


  }

  return (
    <Router>
      <Header searchBar={true} />
      <Routes>
        <Route exact path="/" element={
            <>
            <Addtodo onAdd={onAdd} />
            <Todos todos={todos} onDelete={onDelete} />
            </>
          }>
        </Route>
        <Route exact path="/about" element={<About/>}>
        </Route>
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
