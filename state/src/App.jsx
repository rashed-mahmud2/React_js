// import { useReducer } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import {TodosContextProvider } from "./contexts/TodosContext";

function App() {
  return (
    <>
      <h1>Simple Todo Application</h1>
      <TodosContextProvider>
        <AddTodo />
        <TodoList />
      </TodosContextProvider>
    </>
  );
}

export default App;
