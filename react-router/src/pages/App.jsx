import { useEffect, useState } from "react";
import Nav from "../components/Nav";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState("");
  const getAllTodos = async () => {
    try {
      const response = await fetch(`http://localhost:3000/todos`);
      const data = await response.json();
      setTodos(data);
      // console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getAllTodos();
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log();
    try {
      await fetch(`http://localhost:3000/todos`, {
        method: "POST",
        body: JSON.stringify({ title: todoTitle, isComplete: false }),
        headers: {
          "Content-type": "application/json",
        },
      });
      getAllTodos();
      setTodoTitle("");
    } catch (error) {
      console.log(error.message);
    }
  };

  const removehandler = async (id) => {
    // setTodos(todos.filter(todo => todo.id !== id))
    try {
      await fetch(`http://localhost:3000/todos/${id}`, {
        method: "DELETE",
      });
      getAllTodos();
    } catch (error) {
      console.log(error.message);
    }
  };

  const checkedHandler = async (todoId) => {
    const updateTodo = todos.find((todo) => todo.id === todoId);
    try {
      await fetch(`http://localhost:3000/todos/${todoId}`, {
        method: "PATCH",
        body: JSON.stringify({
          isComplete: !updateTodo.isComplete,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      getAllTodos();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Add task"
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
        />
        <button type="submit">Add todo</button>
      </form>
      <hr />
      <h2>All todos</h2>
      <ul>
        {todos?.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.isComplete}
              onChange={() => checkedHandler(todo.id)}
            />
            <span>{todo.title}</span>
            <button onClick={() => removehandler(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
