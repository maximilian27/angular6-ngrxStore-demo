import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo-list.service';

describe('TodoListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoService = TestBed.get(TodoService);
    expect(service).toBeTruthy();
  });
});
