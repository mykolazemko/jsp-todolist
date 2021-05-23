import { useState } from 'react';
import './todos.css'

const Todos = ({todo, id, status, todos, setTodos}) => {

    const [taskStatus, setTaskStatus] = useState(status)

    const doneTodo = () => taskStatus ? setTaskStatus(false) : setTaskStatus(true);
    const deleteTodo  = () => setTodos(todos.filter(i => i.id !== id))
    
    return(
        <div>
            <input onChange={() => doneTodo()} type="checkbox" />
            {taskStatus
                ? <span className="line-through">{todo.value}</span>
                : <span>{todo.value}</span>}
            {taskStatus
                ? <span className="active-task"onClick={()=>deleteTodo(id)}>[X]</span>
                : <span className="done-task">[V]</span>
                }
            
        </div>
    )
}
export default Todos