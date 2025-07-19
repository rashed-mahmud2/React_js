
import TodoContent from "./TodoContent";
import  { useTodo }  from "../contexts/TodosContext";


export default function Todo({ todo }) {
  const { handleChange, handleDelete } = useTodo();
  return (
    <>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={(e) =>
          handleChange({
            id: todo.id,
            title: todo.title,
            done: e.target.checked,
          })
        }
      />
      <TodoContent todo={todo} />
      <button onClick={() => handleDelete(todo.id)}>Delete</button>
    </>
  );
}
