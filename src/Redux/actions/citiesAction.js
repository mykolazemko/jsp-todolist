import axios from "axios";
export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";
export const ADD_NEW_USER = "ADD_NEW_USER";
export const DELETE_USER = "DELETE_USER";

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest())
        axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const users = response.data
            dispatch(fetchUsersSUccess(users))
        })
        .catch(error => {
            dispatch(fetchUsersFailure(error.message))
        })
    }
}

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUsersSUccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

export const addNewUser = (id) => {
    return {
        type: ADD_NEW_USER,
        payload: id
    }
}

export const deleteUser = id => {
    return {
        type: DELETE_USER,
        payload: id
    }
}