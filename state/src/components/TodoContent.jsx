import React, { useState } from 'react'
import  { useTodo }  from '../contexts/TodosContext';

export default function TodoContent({todo}) {
  const [isEditing, setIsEditing] = useState(false);
  const { handleChange } = useTodo();

  const todoContent = isEditing ? (
    <>
      <input
        type="text"
        value={todo.title}
        onChange={(e) =>
          handleChange({
            id: todo.id,
            title: e.target.value,
            done: todo.done,
          })
        }
      />
      <button onClick={() => setIsEditing(false)}>Save</button>
    </>
  ) : (
    <>
      {todo.title}
      <button onClick={() => setIsEditing(true)}>Edit</button>
    </>
  );

  return todoContent
}
