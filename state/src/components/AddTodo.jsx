import React, { useState } from "react";
import  { useTodo }  from "../contexts/TodosContext";

export default function AddTodo() {
  const [title, setTitle] = useState("");
  const {handleAddTodo} = useTodo()

  return (
    <div>
      <input
        type="text"
        placeholder="Add task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={() => {
        handleAddTodo(title)
        setTitle("")
      }}>Add</button>
    </div>
  );
}
