
import { FaTrash } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { FaCheckDouble } from "react-icons/fa";
import { TodoType } from "../types/types";
import { useDispatch } from "react-redux";
import { deleteTodos, updateTodos } from "../redux/slices/todoSlice";
import { useState } from "react";

interface TodoProbs {
    todo: TodoType
}

function Todo({ todo }: TodoProbs) {
    const [editable, setEditable] = useState(false);
    const [currentTodo, setCurrentTodo] = useState<string>(todo.content)
    const dispatch = useDispatch();
    const deleteTodo = () => {
        dispatch(deleteTodos(todo.id))
    }
    const updateTodo = () => {
        const payload: TodoType = {
            id: todo.id,
            content: currentTodo
        }
        dispatch(updateTodos(payload))
        setEditable(false)
    }
    return (
        <div style={{
            display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
            border: '1px solid lightgrey', padding: '16px', marginTop: '25px', borderRadius: '5px'
        }}>
            <div>
                {
                    editable ? <input type="text" value={currentTodo} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCurrentTodo(e.target.value)} /> : todo.content
                }
            </div>

            <div>
                <FaTrash style={{ marginRight: '8px' }} className='icons' onClick={deleteTodo} />
                {
                    editable ? <FaCheckDouble className="icons" onClick={updateTodo} /> : <CiEdit className='icons' onClick={() => setEditable(true)} />
                }


            </div>

        </div>
    )
}

export default Todo