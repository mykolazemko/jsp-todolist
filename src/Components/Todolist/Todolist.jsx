import { useState, useEffect } from 'react';
import Todos from './Todos/Todos';
import { fetchTodos, addNewTodo, doneTodo, deleteTodo } from '../../Redux/actions/todosAction';
import TodosInputForm from './TodosInputForm/TodosInputForm';
import { connect, useDispatch, useSelector } from 'react-redux';

import './todos.scss'


const TodoList = () => {

    const userData = useSelector(state => state.todos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);
    
    const addTodo = (value) => {
       dispatch(addNewTodo({ id: userData.todos.length + 1, title: value }))       
    }
    
    const doneTodoItem = (id) => {
        dispatch(doneTodo(id))
    }

    const deleteTodoItem = (id) => {
        dispatch(deleteTodo(id))
    }
    return (
        <div>
            <TodosInputForm addTodo={addTodo} />

            {userData.todos.map((todo, index) => <Todos

                title={todo.title}
                deleteTodoItem={deleteTodoItem}
                key={index}
                id={todo.id}
                status={todo.completed}
                doneTodoItem={doneTodoItem}
            />)}
        </div>
    )

}

export default TodoList
