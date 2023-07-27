import React, { useContext, useState } from "react";
import "../App/App.css";
import TodosContext from "../../store/todosContext";
import postFetch from "../../utils/postFetch";

export function TodoForm() {
  const [value, setValue] = useState("");
  const { setTodos } = useContext(TodosContext);

  const addTodo = async (title) => {
    const newTodo = { title, isCompleted: false };
    const { success, todo } = await postFetch(
      "http://localhost:8888/api/todos",
      newTodo
    );
    if (success) setTodos((todos) => [...todos, todo]);
    else alert("Fail to add todo");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
