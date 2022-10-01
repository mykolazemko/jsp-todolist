import { createStore, applyMiddleware, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import usersReduser from "./redusers/usersReducer";
import todosReduser from "./redusers/todosReducer";
import chatReducer from "./redusers/chatReducer";

const allReducers = combineReducers({
    users: usersReduser,
    todos: todosReduser,
    messages: chatReducer
});

export const store = createStore(
    allReducers,
    composeWithDevTools(applyMiddleware(logger, thunk))
)
