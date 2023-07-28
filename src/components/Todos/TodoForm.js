import React, { useContext, useState } from "react";
import TodosContext from "../../store/todosContext";
import fetchData from "../../utils/fetchData";

export function TodoForm() {
  const [value, setValue] = useState("");
  const { setTodos } = useContext(TodosContext);

  const addTodo = async (title) => {
    const newTodo = { title, isCompleted: false };
    const requestConfig = {
      url: "todos",
      method: "post",
      data: newTodo,
    };
    const { success, todo } = await fetchData(requestConfig);
    //todo : chỗ này anh thấy viết thế này oke hơn sửa lại mấy cái khác cũng như thế nhe + khii call api thì nên bỏ try catch vào nha
    if(!success) return alert("Fail to add todo");
    setTodos((todos) => [...todos, todo]);
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
