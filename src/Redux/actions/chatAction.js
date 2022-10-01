import axios from "axios";
export const SEND_MESSAGE = "SEND_MESSAGE";
export const LIKE_MESSAGE = "LIKE_MESSAGE";
export const TOGGLE_LIKE_MESSAGE = "TOGGLE_LIKE_MESSAGE";

export const sendMessage = ( value) => {
    return {
        type: SEND_MESSAGE,
        payload: value
    }
}

export const likeMessage = (id) => {
    return {
        type: LIKE_MESSAGE,
        payload: id
    }
}

export const toggleLikeMessage = (id) => {
    return {
        type: TOGGLE_LIKE_MESSAGE,
        payload: id
    }
}
