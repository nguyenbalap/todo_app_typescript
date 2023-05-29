export interface ITodo {
    _id: string,
    name: string,
    description: string,
    status: boolean,
    createdAt?: Date,
    updatedAt?: Date,
}

export interface TodoProps {
    todo: ITodo
}

export type ApiDataType = {
    msg: string,
    status: string,
    todos?: ITodo [],
}