export default function todosReducer(draftTodos, action) {
  const getNextTodoId = (draftTodos) => {
    if (draftTodos.length === 0) {
      return 1;
    }

    const maxId = draftTodos.reduce(
      (maxId, todo) => Math.max(maxId, todo.id),
      0
    );
    return maxId + 1;
  };

  switch (action.type) {
    case "change": {
      const index = draftTodos.findIndex((t) => t.id === action.todo.id);
      draftTodos[index] = action.todo;

      break;
    }
    // return todos.map((t) => {
    //   if (t.id === action.todo.id) {
    //     return {
    //       ...t,
    //       title: action.todo.title,
    //       done: action.todo.done,
    //     };
    //   }
    //   return t;
    // });

    case "add":
      draftTodos.push({
        id: getNextTodoId(draftTodos),
        title: action.title,
        done: false,
      });

      break;

    //   return [
    //     ...todos,
    //     {
    //       id: getNextTodoId(todos),
    //       title: action.title,
    //       done: false,
    //     },
    //   ];

    case "delete":
      return draftTodos.filter((t) => t.id !== action.id);

    default:
      throw new Error("No matching action");
  }
}
