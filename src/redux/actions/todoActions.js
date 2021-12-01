import {
    FETCH_LIST_REQUEST,
    FETCH_LIST_SUCCESS,
    FETCH_LIST_FAILURE,
} from './todoTypes';

export const fetchListRequest = () => {
    return {
        type: FETCH_LIST_REQUEST,
    };
};

export const fetchListSuccess = (todoList) => {
    return {
        type: FETCH_LIST_SUCCESS,
        payload: todoList,
    };
};

export const fetchListfailure = (error) => {
    return {
        type: FETCH_LIST_FAILURE,
        payload: error,
    };
};
