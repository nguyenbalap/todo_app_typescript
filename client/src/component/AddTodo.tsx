import React, {memo} from "react";
import { useState } from "react";
import { ITodo } from "../types";
import "../App.css";

interface Props {
  onSaveTodo: (todo: ITodo) => void;
}

// const AddTodo: React.FC<Props> = ({ saveTodo }) => {
function AddTodo({ onSaveTodo }: Props): JSX.Element {
  const [form, setForm] = useState({
    _id: "",
    name: "",
    description: "",
    status: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  };

  return (
    <div className="flex">
      <div className="subcontainer">
        <div className="subcontainer_item">
          <div className="subcontainer_item_text">Name</div>
          <input
            type="text"
            placeholder="enter name"
            className="subcontainer_item_input"
            name="name"
            value={form.name}
            onChange={handleChange}
          ></input>
        </div>
        <div className="subcontainer_item">
          <div className="subcontainer_item_text">Description</div>
          <input
            type="text"
            placeholder="enter description"
            className="subcontainer_item_input"
            name="description"
            value={form.description}
            onChange={handleChange}
          ></input>
        </div>
      </div>
      <button className="btn_add" onClick={() => onSaveTodo(form)}>
        Add button
      </button>
    </div>
  );
}

export default memo(AddTodo);
