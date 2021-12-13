import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {todosReducer} from './todo-list/store/reducers/todos-reducer';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {TodosEffectsService} from './todo-list/services/todos-effects.service';

export const reducersMap = {
    todos: todosReducer,
};

export interface TodosState {
    todos: any[];
}

@NgModule({
    declarations: [
        AppComponent,
        TodoListComponent
    ],
    imports: [
        BrowserModule,
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryDataService, { dataEncapsulation: false }
        ),
        StoreModule.forRoot(reducersMap),
        EffectsModule.forRoot([]),
        EffectsModule.forFeature([TodosEffectsService]),
        FormsModule,
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
