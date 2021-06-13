import { useState, useEffect } from 'react';
import { fetchTodos, addNewTodo, deleteTodo } from '../../../Redux/actions/todosAction';
import { connect, useDispatch, useSelector } from 'react-redux';
// const Todos = ({ todo, id, status, todos, setTodos, doneTodo }) => {
const Todos = ({id, title, status, deleteTodoItem, doneTodoItem}) => {


  

    return (
        <div className="todos">
            {status
                ? <div className="todo-li">
                    <span onClick={() => doneTodoItem(id)} className={`${status ? 'line-through' : ''}`}>{title}</span>
                    <span className="active-task" onClick={() => deleteTodoItem(id)}>[X]</span>
                </div>
                : <div className="todo-li" onClick={() => doneTodoItem(id)}>
                    <span>{title}</span>
                    <span className="done-task">[V]</span>
                </div>
            }
        </div>
    )
}
export default Todos