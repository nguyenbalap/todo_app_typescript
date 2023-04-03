import axios, { AxiosResponse } from "axios";
import { ApiDataType, ITodo } from "../types";

async function getTodos(): Promise<AxiosResponse<ApiDataType>> {
    try {
        const response: AxiosResponse<ApiDataType> = await axios.get("/api/v1");
        return response;
    }catch (e) {
        throw new Error(e)
    }
}

async function addTodo(form: ITodo): Promise<AxiosResponse<ApiDataType>> {
    try {
        // remove type _id of interface ITodo
        const todo: Omit<ITodo, "_id"> = {
            name: form.name,
            description: form.description,
            status: false,
        }
        const response: AxiosResponse<ApiDataType> = await axios.post("/api/v1/add", todo);
        return response;
    }   
    catch (e) {
        throw new Error(e)
    } 
}

async function updateTodo(form: ITodo): Promise<AxiosResponse<ApiDataType>> {
    try {
        // pick properties from interface
        const todoUpdate: Pick<ITodo, "status"> = {
            status: true,
        }
        const response: AxiosResponse<ApiDataType> = await axios.put(`/api/v1/update/${form._id}`, todoUpdate);
        return response;
    }   
    catch (e) {
        throw new Error(e)
    } 
}

async function deleteTodo(id: string): Promise<AxiosResponse<ApiDataType>> {
    try {
        const response: AxiosResponse<ApiDataType> = await axios.delete(`/api/v1/delete/${id}`);
        return response;
    }   
    catch (e) {
        throw new Error(e)
    } 
}

export { getTodos, addTodo, updateTodo, deleteTodo};