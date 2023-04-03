import React, {useState, useEffect, useCallback} from 'react';
import AddTodo from "./component/AddTodo";
import TodoItem from "./component/TodoItem";
import { ITodo } from './types';
import { addTodo, getTodos, updateTodo, deleteTodo } from './api';
import './App.css';

function App() {
  const [todos, setTodos] = useState<ITodo []>([]);
  const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    fetchTodos()
  }, [isChanged])

  const fetchTodos = (): void => {
    getTodos()
    .then(({ data: { todos } }: ITodo[] | any) => setTodos(todos))
    .catch((err: Error) => console.log(err))
  }

  const handleSaveTodo = useCallback((form: ITodo): void => {
    addTodo(form).then(res => {
      alert("Success")
      setIsChanged(!isChanged);
    })
    .catch(err => alert("Error"));
  }, [])

  const handleUpdateTodo = (form: ITodo): void => {
    updateTodo(form)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error("Error! Todo not updated")
        }
        alert("Success");
        setIsChanged(!isChanged);
      })
      .catch(err => console.log(err))
  }
  
  const handleDeleteTodo = (_id: string): void => {
    deleteTodo(_id)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error("Error! Todo not deleted")
        }
        alert("Success")
        setIsChanged(!isChanged);
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="container">
      <h1 className='title'>My Todos</h1>
      <AddTodo onSaveTodo={handleSaveTodo}/>
      {todos.length > 0 && todos.map((todo: ITodo) => (
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
