import React, { useContext } from "react";
import TodosContext from "../../store/todosContext";

import fetchData from "../../utils/fetchData";
export function Todo({ todo }) {
  const { setTodos } = useContext(TodosContext);
  const { id, title, isCompleted } = todo;

  const removeTodo = async () => {
    try {
      const requestConfig = {
        url: `todo/${id}`,
        method: "delete",
      };
      const { success } = await fetchData(requestConfig);
      if (!success) return alert("Fail to delete todo");
      setTodos((todos) => todos.filter((todo) => todo.id !== id));
    } catch (error) {
      alert(error.message);
    }
  };
  const completeTodo = async () => {
    try {
      const requestConfig = {
        url: `todo/${id}`,
        method: "put",
        data: {
          isCompleted: true,
        },
      };
      const { success } = await fetchData(requestConfig);

      if (!success) return alert("Fail to mark to do as completed");
      setTodos((todos) =>
        todos.map((todo) => {
          if (todo.id === id) todo.isCompleted = true;
          return todo;
        })
      );
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div
      className="todo"
      style={{ textDecoration: isCompleted ? "line-through" : "" }}
    >
      <div>{title.trim()}</div>
      <div>
        <button onClick={() => completeTodo()}>Complete</button>
        <button onClick={() => removeTodo()}>x</button>
      </div>
    </div>
  );
}
