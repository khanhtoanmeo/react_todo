import React, { useState } from "react";
import "./App.css";
import { TodoForm } from "../Todos/TodoForm";
import Todos from "../Todos/Todos";
import TodosContext from "../../store/todosContext";
function App() {
  const [todos, setTodos] = useState([]);
  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      <div className="app">
        <Todos />
        <TodoForm />
      </div>
    </TodosContext.Provider>
  );
}

export default App;
