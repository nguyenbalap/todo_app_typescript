import { Schema, model } from "mongoose";
import { ITodo } from "../types/todo";

const todoSchema = new Schema<ITodo>(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        status: {
            type: Boolean,
            required: true,
        },
    },
    { timestamps: true }
)
const Todo = model<ITodo>('Todo', todoSchema);

export default Todo
