import {
    FETCH_TODOS_REQUEST,
    FETCH_TODOS_SUCCESS,
    FETCH_TODOS_FAILURE,
    ADD_NEW_TODO,
    DELETE_TODO,
    DONE_TODO
} from "../actions/todosAction"

const initialState = {
    lading: false,
    todos: [],
    error: ""
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TODOS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_TODOS_SUCCESS:
            return {
                loading: false,
                todos: action.payload,
                error: ""
            }
        case FETCH_TODOS_FAILURE:
            return {
                loading: false,
                todos: [],
                error: action.payload
            }
        case ADD_NEW_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
                //todos: [...state.todos, { id: state.length + 1}, action.payload]
            }
        case DONE_TODO:
            return {
                ...state,
                todos: [...state.todos.map(todo =>
                    todo.id === action.payload
                    ? {...todo, completed: !todo.completed}
                    : todo)]
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: [...state.todos.filter(todo => todo.id !== action.payload)]
            }
        default: return state
    }
}

export default reducer;