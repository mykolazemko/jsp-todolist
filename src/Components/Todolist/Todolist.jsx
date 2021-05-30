import { useState } from 'react';
import Todos from './Todos/Tdos';
import InputForm from './InputForm/InputForm';

import './todos.scss'


const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [id, setId] = useState(1);
    const [taskStatus, setTaskStatus] = useState(false)

    const addTodo = (text) => {       
        setTodos([...todos, {id:id, value:text, done:false}])
        setId(id+1)
    }

    const doneTodo = (id) => {
        setTodos(todos.map((todo) => {
            return todo.id === id ? {...todo, done: !todo.done} : todo;
        }))
        console.log(todos)
    }

    return(
        <div>
        {todos.map((todo, index) => <Todos
             todo={todo}
             key={index}
             id={todo.id}
             status={todo.done}
             todos={todos}
             doneTodo={doneTodo}
             setTodos={setTodos}/>)}
             
         <InputForm addTodo={addTodo}/>
     </div>
    )
  
}
export default TodoList