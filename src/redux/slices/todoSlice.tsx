import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TodoInitalstate, TodoType } from '../../types/types'



const initialState: TodoInitalstate = {
    todos: []
}

export const todosSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        createTodo: (state: TodoInitalstate, action: PayloadAction<TodoType>) => {
            state.todos = [...state.todos, action.payload]
        },
        deleteTodos: (state: TodoInitalstate, action: PayloadAction<number>) => {
            state.todos = [...state.todos.filter((data) => data.id !== action.payload)]

        },
        updateTodos: (state: TodoInitalstate, action: PayloadAction<TodoType>) => {
            const response = [...state.todos.filter((data) => data.id !== action.payload.id)]
            state.todos = [...response, action.payload]
        }
    },
})


export const { createTodo, deleteTodos,updateTodos } = todosSlice.actions

export default todosSlice.reducer