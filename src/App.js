import React, { useState } from "react";
import "./styles/styles.css";
import { TodoForm } from "./components/Todos/TodoForm";
import Todos from "./components/Todos/Todos";
import TodosContext from "./store/todosContext";
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
