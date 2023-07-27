import { useContext, useCallback } from "react";
import { Todo } from "./Todo";
import TodosContext from "../../store/todosContext";
import useFetch from "../../hooks/useFetch";
function Todos() {
  const { todos, setTodos } = useContext(TodosContext);

  const dataLoadedHandler = useCallback(
    (data) => {
      setTodos(data);
    },
    [setTodos]
  );

  const { loading } = useFetch(
    "http://localhost:8888/api/todos",
    dataLoadedHandler
  );

  return (
    <div className="todo-list">
      {loading && <p>Loading todos</p>}
      {todos.length > 0 &&
        todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
    </div>
  );
}

export default Todos;
