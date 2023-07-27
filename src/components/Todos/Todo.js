import React, { useContext } from "react";
import "../App/App.css";
import TodosContext from "../../store/todosContext";
import updateFetch from "../../utils/updateFetch";
import deleteFetch from "../../utils/deleteFetch";
export function Todo({ todo }) {
  const { setTodos } = useContext(TodosContext);
  const { id, title, isCompleted } = todo;

  const removeTodo = async () => {
    const { success } = await deleteFetch(
      `http://localhost:8888/api/todo/${id}`
    );
    if (success) setTodos((todos) => todos.filter((todo) => todo.id !== id));
    else alert("Fail to delete todo");
  };

  const completeTodo = async () => {
    const { success } = await updateFetch(
      `http://localhost:8888/api/todo/${id}`,
      {
        isCompleted: true,
      }
    );

    if (success)
      setTodos((todos) =>
        todos.map((todo) => {
          if (todo.id === id) todo.isCompleted = true;
          return todo;
        })
      );
    else alert("Fail to mark to do as completed");
  };
  return (
    <div
      className="todo"
      style={{ textDecoration: isCompleted ? "line-through" : "" }}
    >
      {title}
      <div>
        <button onClick={() => completeTodo()}>Complete</button>
        <button onClick={() => removeTodo()}>x</button>
      </div>
    </div>
  );
}
