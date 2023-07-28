import React, { useContext } from "react";
import TodosContext from "../../store/todosContext";

import fetchData from "../../utils/fetchData";
export function Todo({ todo }) {
  const { setTodos } = useContext(TodosContext);
  const { id, title, isCompleted } = todo;

  const removeTodo = async () => {
    const requestConfig = {
      url: `todo/${id}`,
      method: "delete",
    };
    const { success } = await fetchData(requestConfig);
    if (success) setTodos((todos) => todos.filter((todo) => todo.id !== id));
    else alert("Fail to delete todo");
  };

  const completeTodo = async () => {
    const requestConfig = {
      url: `todo/${id}`,
      method: "put",
      data: {
        isCompleted: true,
      },
    };
    const { success } = await fetchData(requestConfig);

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
      {/*todo :anh nghĩ nên chuyển cái title vào một thẻ div + validate trường hợp có dâu cách và không nhập gì nhé */}
      {title}
      <div>
        <button onClick={() => completeTodo()}>Complete</button>
        <button onClick={() => removeTodo()}>x</button>
      </div>
    </div>
  );
}
