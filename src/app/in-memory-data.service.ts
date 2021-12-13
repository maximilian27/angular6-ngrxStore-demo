import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
    providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

    public createDb() {
        const todos = [
            {
                id: 1,
                name: 'buy groceries',
                checked: true,
            },
            {
                id: 2,
                name: 'go to school',
                checked: false,
            },
            {
                id: 3,
                name: 'always wash your hands',
                checked: true,
            },
            {
                id: 4,
                name: `don't accept candy from strangers`,
                checked: false,
            },
        ];
        return {todos};
    }

    public genId(todos: any[]): number {
        return todos.length > 0 ? Math.max(...todos.map(hero => hero.id)) + 1 : 1;
    }
}
