import { createContext, useContext } from "react";
import { useImmerReducer } from "use-immer";
import todosReducer from "../reducers/todosReducer";
import initialTodos from "../data/initialTodos";

const TodosContext = createContext(null);
export default TodosContext;

export function TodosContextProvider({ children }) {
  const [todos, dispatch] = useImmerReducer(todosReducer, initialTodos);

  const handleChange = (todo) => {
    dispatch({
      type: "change",
      todo,
    });
  };

  const handleDelete = (id) => {
    dispatch({
      type: "delete",
      id,
    });
  };

  const handleAddTodo = (title) => {
    dispatch({
      type: "add",
      title,
    });
  };

  return (
    <TodosContext.Provider
      value={{ todos, handleChange, handleDelete, handleAddTodo }}
    >
      {children}
    </TodosContext.Provider>
  );
}


 export function useTodo () {
    return useContext(TodosContext)
}