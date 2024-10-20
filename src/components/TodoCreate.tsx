import { useState } from "react";
import { useDispatch } from "react-redux"
import { TodoType } from "../types/types";
import { createTodo } from "../redux/slices/todoSlice";


export default function TodoCreate() {
    const dispatch = useDispatch();
    const [todo, setTodo] = useState<string>('');

    const handleCreateTodo = () => {
        if (todo.trim().length == 0) {
            alert("Todo Giriniz");
            return;
        }
        const payload: TodoType = {
            id: Math.floor(Math.random() * 9999999999),
            content: todo

        }
        dispatch(createTodo(payload));
        setTodo('');
    }

    return (
        <div className='todo-create' >
            <input type="text" className='todo-input' placeholder='Todo Giriniz...' value={todo} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTodo(e.target.value)} />
            <button onClick={handleCreateTodo} className='todo-create-button'>Oluştur</button>
        </div>
    )
}
