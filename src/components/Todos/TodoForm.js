import React, { useContext, useState } from "react";
import TodosContext from "../../store/todosContext";
import fetchData from "../../utils/fetchData";

export function TodoForm() {
  const [value, setValue] = useState("");
  const { setTodos } = useContext(TodosContext);

  const addTodo = async (title) => {
    const newTodo = { title, isCompleted: false };
    const dataConfig = {
      url: "http://localhost:8888/api/todos",
      method: "post",
      data: newTodo,
    };
    const { success, todo } = await fetchData(dataConfig);
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
