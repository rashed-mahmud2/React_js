

import Todo from "./Todo";
import { useTodo }  from "../contexts/TodosContext";

export default function TodoList() {
 const {todos} = useTodo()

  return (
    <div>
      <ul>
        {todos?.map((todo) => (
          <li key={todo.id}>
            <Todo todo={todo} />
          </li>
        ))}
      </ul>
    </div>
  );
}
