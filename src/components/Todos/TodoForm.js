import React, { useContext, useState } from "react";
import TodosContext from "../../store/todosContext";
import fetchData from "../../utils/fetchData";

export function TodoForm() {
  const [value, setValue] = useState("");
  const { setTodos } = useContext(TodosContext);

  const addTodo = async (title) => {
    try {
      const newTodo = { title, isCompleted: false };
      const requestConfig = {
        url: "todos",
        method: "post",
        data: newTodo,
      };
      const { success, todo } = await fetchData(requestConfig);
      if (!success) return alert("Fail to add todo");
      setTodos((todos) => [...todos, todo]);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return alert("Please enter something meaningful");
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
