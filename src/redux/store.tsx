import { configureStore } from '@reduxjs/toolkit'
import todosReducer from './slices/todoSlice'

export const store = configureStore({
    reducer: {
        todo: todosReducer
    },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch