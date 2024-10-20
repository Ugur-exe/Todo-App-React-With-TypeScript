
import { useSelector } from 'react-redux'
import Todo from './Todo'
import { RootState } from '../redux/store'
import { TodoType } from '../types/types'

export default function TodoList() {
    const { todos } = useSelector((store: RootState) => store.todo)
    return (
        <div>
            {
                todos && todos.map((data: TodoType) => {
                    return <Todo key={data.id} todo={data} />
                })
            }
        </div>
    )
}
