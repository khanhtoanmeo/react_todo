import { useContext, useCallback } from "react";
import { Todo } from "./Todo";
import TodosContext from "../../store/todosContext";
import useFetch from "../../hooks/useFetch";
function Todos() {
  const { todos, setTodos } = useContext(TodosContext);

  const dataLoadedHandler = useCallback((data) => {
    setTodos(data);
  }, []);

  const { loading } = useFetch("todos", dataLoadedHandler);

  return (
    <div className="todo-list">
      {loading ? (
        <h1>Loading todos</h1>
      ) : (
        todos.map((todo) => <Todo key={todo.id} todo={todo} />)
      )}
    </div>
  );
}

export default Todos;
