import {TodosActions, TodosActionType} from '../actions/todos-actions';

const initialState: any = {};


export function todosReducer(state: any = initialState, action: TodosActions): any {
    switch (action.type) {
        case TodosActionType.GET_TODOS:
            return {
                ...state,
                message: 'Loading',
            };
        case TodosActionType.GET_TODOS_SUCCESS:
            return {
                ...state,
                message: 'Success',
                todos: action.payload,
            };
        case TodosActionType.GET_TODOS_FAILED:
            return {
                ...state,
                message: action.payload.statusText,
            };
        case TodosActionType.DELETE_TODO:
            return {
                ...state,
                message: 'Delete',
            };
        case TodosActionType.DELETE_TODO_SUCCESS:
            const filteredTodos = [...state.todos].filter(todo => todo.id !== action.payload);

            return {
                ...state,
                todos: filteredTodos,
                message: 'Delete Success',
            };

        case TodosActionType.DELETE_TODO_FAILED:
            return {
                ...state,
                message: action.payload.statusText,
            };
        case TodosActionType.UPDATE_TODO:
            return {
                ...state,
                message: 'Update',
            };
        case TodosActionType.UPDATE_TODO_SUCCESS:
            const todos = [...state.todos];
            const selectedTodo = todos.find(todo => todo.id === action.payload.id);
            selectedTodo.checked = !selectedTodo.checked;
            return {
                ...state,
                todos: todos,
                message: 'Update Success',
            };
        case TodosActionType.UPDATE_TODO_FAILED:
            return {
                ...state,
                message: action.payload.statusText,
            };
        case TodosActionType.ADD_TODO:
            return {
                ...state,
                message: 'Update',
            };
        case TodosActionType.ADD_TODO_SUCCESS:
            const newTodo = {id: Math.floor(Math.random() * 6000) + 100, ...action.payload };
            const newList = [...state.todos, newTodo];

            return {
                ...state,
                todos: newList,
                message: 'Update Success',
            };
        case TodosActionType.ADD_TODO_FAILED:
            return {
                ...state,
                message: action.payload.statusText,
            };
        default:
            return state;
    }
}
