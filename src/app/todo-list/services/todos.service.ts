import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class TodosService {
    private todosUrl = 'api/todos';  // URL to web api

    constructor(
        private http: HttpClient,
    ) { }

    public getTodos(): Observable<any[]> {
        return this.http.get<any[]>(this.todosUrl).pipe(
            tap(() => console.log('fetch todos...')),
        );
    }

    public addTodo (todo: any): Observable<any> {
        return this.http.post<any>(this.todosUrl, todo, httpOptions).pipe(
            tap(() => console.log('add todo...')),
        );
    }

    public deleteTodo (id: number): Observable<any> {
        const url = `${this.todosUrl}/${id}`;
        return this.http.delete<any>(url, httpOptions).pipe(
            tap(() => console.log('delete todo...')),
        );
    }

    public updateStatus (todo: any): Observable<any> {
        return this.http.put(this.todosUrl, todo, httpOptions).pipe(
            tap(() => console.log('update todo...')),
        );
    }

}
