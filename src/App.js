import { useState } from 'react';
import Todos from './Components/Todos/Tdos'
import InputForm from './Components/InputForm/InputForm'

function App() {

    const [todos, setTodos] = useState([]);
    const [id, setId] = useState(1)

    const addTodo = (text) => {       
        setTodos([...todos, {id:id, value:text, done:false}])
        setId(id+1)
    }
 console.log(todos)
   
    return (
        <div className="App">
           {todos.map((todo, index) => <Todos
                todo={todo}
                key={index}
                id={todo.id}
                status={todo.done}
                todos={todos}
                setTodos={setTodos}/>)}
            <InputForm addTodo={addTodo}/>
        </div>
    );
}

export default App;
