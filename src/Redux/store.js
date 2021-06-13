import { createStore, applyMiddleware, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import usersReduser from "./redusers/usersReducer";
import todosReduser from "./redusers/todosReducer";

const allReducers = combineReducers({
    users: usersReduser,
    todos: todosReduser
});

export const store = createStore(
    allReducers,
    composeWithDevTools(applyMiddleware(logger, thunk))
)