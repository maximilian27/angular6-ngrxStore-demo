import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {TodosState} from '../app.module';
import * as Todos from '../todo-list/store/actions/todos-actions';
import {TodosService} from './services/todos.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, OnDestroy {
    public todos: any[];
    public newTodoDescription = '';
    public subscription: Subscription;

    constructor(
        private todosService: TodosService,
        private store: Store<{todos: TodosState}>,
    ) {
        this.subscription = new Subscription();
    }

    public ngOnInit(): void {
        this.getTodos();
    }

    public getTodos(): void {
        this.store.dispatch(new Todos.GetTodos());

        this.subscription.add(this.store.select<TodosState>('todos').subscribe(response => {
            console.log('store state response: ', response);
            this.todos = response.todos;
        }));
    }

    public submitNewTodo() {
        const todo = {
            name: this.newTodoDescription,
            checked: false,
        };
        this.store.dispatch(new Todos.AddTodo(todo));
    }

    public deleteTodo(id) {
        this.store.dispatch(new Todos.DeleteTodo(id));
    }

    public updateStatus(todo) {
        this.store.dispatch(new Todos.UpdateTodo(todo));
    }

    public ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
