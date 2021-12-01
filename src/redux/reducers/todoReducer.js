import {
    FETCH_LIST_REQUEST,
    FETCH_LIST_SUCCESS,
    FETCH_LIST_FAILURE,
} from '../actions/todoTypes';

const initialState = {
    loading: false,
    todoList: [],
    error: '',
    selectedItems: [],
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
    case FETCH_LIST_REQUEST:
        return {
            ...state,
            loading: true,
        };
    case FETCH_LIST_SUCCESS:
        return {
            loading: false,
            todoList: action.payload || state.todoList,
            error: '',
        };
    case FETCH_LIST_FAILURE:
        return {
            loading: false,
            todoList: [],
            error: action.payload || state.error,
        };
    }
};
export default todoReducer;
