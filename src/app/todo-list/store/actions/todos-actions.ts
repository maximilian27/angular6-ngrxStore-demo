import { Action } from '@ngrx/store';

export enum TodosActionType {
    GET_TODOS = 'GET_TODOS',
    GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS',
    GET_TODOS_FAILED = 'GET_TODOS_FAILED',
    DELETE_TODO = 'DELETE_TODO',
    DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS',
    DELETE_TODO_FAILED = 'DELETE_TODO_FAILED',
    UPDATE_TODO = 'UPDATE_TODO',
    UPDATE_TODO_SUCCESS = 'UPDATE_TODO_SUCCESS',
    UPDATE_TODO_FAILED = 'UPDATE_TODO_FAILED',
    ADD_TODO = 'ADD_TODO',
    ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS',
    ADD_TODO_FAILED = 'ADD_TODO_FAILED',
}

export class GetTodos implements Action {
    public readonly type = TodosActionType.GET_TODOS;
}

export class GetTodosSuccess implements Action {
    public readonly type = TodosActionType.GET_TODOS_SUCCESS;
    constructor(public payload: any) { }
}

export class GetTodosFailed implements Action {
    public readonly type = TodosActionType.GET_TODOS_FAILED;
    constructor(public payload: any) { }
}

export class DeleteTodo implements Action {
    public readonly type = TodosActionType.DELETE_TODO;
    constructor(public payload: number) { }
}

export class DeleteTodoSuccess implements Action {
    public readonly type = TodosActionType.DELETE_TODO_SUCCESS;
    constructor(public payload: number) { }
}

export class DeleteTodoFailed implements Action {
    public readonly type = TodosActionType.DELETE_TODO_FAILED;
    constructor(public payload: any) { }
}

export class UpdateTodo implements Action {
    public readonly type = TodosActionType.UPDATE_TODO;
    constructor(public payload: any) { }
}

export class UpdateTodoSuccess implements Action {
    public readonly type = TodosActionType.UPDATE_TODO_SUCCESS;
    constructor(public payload: any) { }
}

export class UpdateTodoFailed implements Action {
    public readonly type = TodosActionType.UPDATE_TODO_FAILED;
    constructor(public payload: any) { }
}

export class AddTodo implements Action {
    public readonly type = TodosActionType.ADD_TODO;
    constructor(public payload: any) { }
}

export class AddTodoSuccess implements Action {
    public readonly type = TodosActionType.ADD_TODO_SUCCESS;
    constructor(public payload: any) { }
}

export class AddTodoFailed implements Action {
    public readonly type = TodosActionType.ADD_TODO_FAILED;
    constructor(public payload: any) { }
}


export type TodosActions =
    GetTodos |
    GetTodosSuccess |
    GetTodosFailed |
    DeleteTodo |
    DeleteTodoSuccess |
    DeleteTodoFailed |
    UpdateTodo |
    UpdateTodoSuccess |
    UpdateTodoFailed |
    AddTodo |
    AddTodoSuccess |
    AddTodoFailed;
