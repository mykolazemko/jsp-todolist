import { useState } from 'react';

const Todos = ({ todo, id, status, todos, setTodos, doneTodo }) => {

    const [taskStatus, setTaskStatus] = useState(status)

    //const doneTodo = () => setTodos(todos.filter(todo => todo.id === id ? {...todo, done: !todo.done} : todo));
    //const doneTodo = (id) => taskStatus ? setTaskStatus(false) : setTaskStatus(true);
    // const doneTodo = (id) => {
    //     setTodos(todos.map((todo) => {
    //     return todo.id === id ? todo.done=true : todo.done=false
    //     }))
    // }
    //   console.log(todos)

    const deleteTodo = () => setTodos(todos.filter(i => i.id !== id))

    return (
        <div className="todos">
            {status
                ? <div className="todo-li">
                    <span onClick={() => doneTodo(id)} className={`${status ? 'line-through' : ''}`}>{todo.value}</span>
                    <span className="active-task" onClick={() => deleteTodo(id)}>[X]</span>
                </div>
                : <div className="todo-li" onClick={() => doneTodo(id)}>
                    <span>{todo.value}</span>
                    <span className="done-task">[V]</span>
                </div>
            }
        </div>
    )
}
export default Todos