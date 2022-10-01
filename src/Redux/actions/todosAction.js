import axios from "axios";
export const FETCH_TODOS_REQUEST = "FETCH_TODOS_REQUEST";
export const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS";
export const FETCH_TODOS_FAILURE = "FETCH_TODOS_FAILURE";
export const ADD_NEW_TODO = "ADD_NEW_TODO";
export const DONE_TODO = "DONE_TODO";
export const DELETE_TODO = "DELETE_TODO";

export const fetchTodos = () => {
    return (dispatch) => {
        dispatch(fetchTodosRequest())
        axios
        .get('https://jsonplaceholder.typicode.com/users/1/todos')
        .then(response => {
            const todos = response.data
            dispatch(fetchTodosSUccess(todos))
        })
        .catch(error => {
            dispatch(fetchTodosFailure(error.message))
        })
    }
}

export const fetchTodosRequest = () => {
    return {
        type: FETCH_TODOS_REQUEST
    }
}

export const fetchTodosSUccess = users => {
    return {
        type: FETCH_TODOS_SUCCESS,
        payload: users
    }
}

export const fetchTodosFailure = error => {
    return {
        type: FETCH_TODOS_FAILURE,
        payload: error
    }
}

export const addNewTodo = ( value) => {
    return {
        type: ADD_NEW_TODO,
        payload: value
    }
}

export const doneTodo = id => {
    return {
        type: DONE_TODO,
        payload: id
    }
}

export const deleteTodo = id => {
    return {
        type: DELETE_TODO,
        payload: id
    }
}