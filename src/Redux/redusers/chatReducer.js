import { SEND_MESSAGE, LIKE_MESSAGE, TOGGLE_LIKE_MESSAGE } from "../actions/chatAction"

const initialState = {
    lading: false,
    messages: [],
    error: ""
}

const reducer = (state = initialState, action) => {
    switch (action.type) {        
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.payload]
            }
        case TOGGLE_LIKE_MESSAGE:
            return {
                ...state,
                messages: [...state.messages.map(m =>
                    m.id === action.payload.id
                    ? {...m,
                        like: !m.like,
                        reaction: state.messages.like ? '' : 'heart'}
                    : m)]
            }
        case LIKE_MESSAGE:
            return {
                ...state,
                messages: [...state.messages.map(m =>
                    m.id === action.payload.id
                    ? {...m,
                        like: action.payload.reaction === m.reaction ? !m.like : state.messages.like = true,
                        reaction: state.messages.like === false ? '' : action.payload.reaction}
                    : m)]
            }
        default: return state
    }
}

export default reducer;
