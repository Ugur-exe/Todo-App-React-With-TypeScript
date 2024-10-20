export interface TodoInitalstate {
    todos: Array<TodoType>
}

export interface TodoType {
    id: number,
    content: string,
}