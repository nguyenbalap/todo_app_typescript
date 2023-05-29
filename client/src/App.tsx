import React, { useCallback } from "react";
import AddTodo from "./component/AddTodo";
import TodoItem from "./component/TodoItem";
import { ITodo } from "./types";
import { useAddToDo, useGetTodos, useUpdateToDo, useDeleteToDo } from "./hooks";
import "./App.css";

function App() {
  const { isLoading, data } = useGetTodos();
  const { mutate: addTodo } = useAddToDo();
  const { mutate: updateTodo } = useUpdateToDo();
  const { mutate: deleteTodo } = useDeleteToDo();

  const handleSaveTodo = useCallback((form: ITodo): void => {
    addTodo(form);
  }, []);

  const handleUpdateTodo = (form: ITodo): void => {
    updateTodo(form);
  };

  const handleDeleteTodo = (_id: string): void => {
    deleteTodo(_id);
  };

  return (
    <div className="container">
      <h1 className="title">My Todos</h1>
      <AddTodo onSaveTodo={handleSaveTodo} />
      {!isLoading &&
        data.todos.map((todo: ITodo) => (
          <TodoItem
            key={todo._id}
            onUpdateTodo={handleUpdateTodo}
            onDeleteTodo={handleDeleteTodo}
            todo={todo}
          />
        ))}
    </div>
  );
}

export default App;
