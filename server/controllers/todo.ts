import express from "express";
import { ITodo } from "../types/todo";
import Todo from "../models/Todo";

async function index(req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> {
    try {
        const todos: ITodo [] = await Todo.find({});
        res.status(200).json(todos);
    }
    catch (err) {
        throw err
    }
}

async function save(req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> {
    try {
        const body = req.body;
        // const body = req.body as Pick<ITodo, "name" | "description" | "status">
        const todo: ITodo = new Todo({
            name: body.name,
            description: body.description,
            status: body.status,
        });
        await todo.save();
        res.status(200).json({msg: "Ok"});
    }
    catch (err) {
        throw err;
    }
}

async function edit(req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> {
    try {
        const id = req.params.id;
        const body = req.body;
        await Todo.findByIdAndUpdate(id, {
            body
        });
        res.status(200).json({msg: "Ok"});
    }
    catch (err) {
        throw err;
    }
}

async function destroy(req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> {
    try {
        const id = req.params.id;
        await Todo.findByIdAndRemove(id);
        res.status(200).json({msg: "Ok"});
    }
    catch (err) {
        throw err;
    }
}

export { index, save, edit, destroy}

