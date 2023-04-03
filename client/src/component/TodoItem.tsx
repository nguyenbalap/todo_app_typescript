import React from "react"
import { ITodo, TodoProps } from "../types";

type Props = TodoProps & {
  onUpdateTodo: (todo: ITodo ) => void;
  onDeleteTodo: (_id: string) => void;
};

const TodoItem: React.FC<Props> = ({ todo, onUpdateTodo, onDeleteTodo }) => {
  const checkTodo: string = todo.status ? `line-through` : "";
  return (
    <div className="Card">
      <div className="Card--text">
        <h1 className={checkTodo}>{todo.name}</h1>
        <span className={checkTodo}>{todo.description}</span>
      </div>
      <div className="Card--button">
        <button
          onClick={() => onUpdateTodo(todo)}
          className={todo.status ? `hide-button` : "Card--button__done"}
        >
          Complete
        </button>
        <button
          onClick={() => onDeleteTodo(todo._id)}
          className="Card--button__delete"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
export default TodoItem
