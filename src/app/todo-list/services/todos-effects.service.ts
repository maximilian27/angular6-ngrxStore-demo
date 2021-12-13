import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {TodosService} from './todos.service';
import {catchError, map, switchMap} from 'rxjs/operators';
import {
    AddTodoFailed,
    AddTodoSuccess,
    DeleteTodoFailed,
    DeleteTodoSuccess,
    GetTodosFailed,
    GetTodosSuccess,
    TodosActionType, UpdateTodoFailed, UpdateTodoSuccess
} from '../store/actions/todos-actions';
import {of} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TodosEffectsService {

    constructor(
        private actions$: Actions,
        private todosService: TodosService,
    ) { }

    @Effect()
    public getTodo = this.actions$.pipe(
        ofType(TodosActionType.GET_TODOS),
        switchMap(() =>
            this.todosService.getTodos().pipe(
                map((todos: any) => new GetTodosSuccess(todos)),
                catchError(error => of(new GetTodosFailed(error))),
            ),
        ),
    );

    @Effect()
    public deleteTodo = this.actions$.pipe(
        ofType(TodosActionType.DELETE_TODO),
        switchMap((action: any) =>
            this.todosService.deleteTodo(action.payload).pipe(
                map(() => new DeleteTodoSuccess(action.payload)),
                catchError(error => of(new DeleteTodoFailed(error))),
            ),
        ),
    );

    @Effect()
    public updateTodo = this.actions$.pipe(
        ofType(TodosActionType.UPDATE_TODO),
        switchMap((action: any) =>
            this.todosService.updateStatus(action.payload).pipe(
                map(() => new UpdateTodoSuccess(action.payload)),
                catchError(error => of(new UpdateTodoFailed(error))),
            ),
        ),
    );

    @Effect()
    public addTodo = this.actions$.pipe(
        ofType(TodosActionType.ADD_TODO),
        switchMap((action: any) =>
            this.todosService.addTodo(action.payload).pipe(
                map(() => new AddTodoSuccess(action.payload)),
                catchError(error => of(new AddTodoFailed(error))),
            ),
        ),
    );
}
