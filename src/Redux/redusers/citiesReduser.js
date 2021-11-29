import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    ADD_NEW_USER,
    DELETE_USER
} from "../actions/usersAction"

const initialState = {
    loading: false,
    cities: ["Lviv", "Ternopil", "Kharkiv", "Cairo", "Tokio"],
    error: ""
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: ""
            }
        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload
            }
        case ADD_NEW_USER:
            return {
                ...state,
                users: [...state.users, { id: state.users.length + 1, name: action.payload}, ]
            }
        case DELETE_USER:
            return {
                ...state,
                users: [...state.users.filter(user => user.id !== action.payload)]
            }
        default: return state
    }
}

export default reducer;