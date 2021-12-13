import { TestBed } from '@angular/core/testing';

import { TodosEffectsService } from './todos-effects.service';

describe('TodosEffectsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodosEffectsService = TestBed.get(TodosEffectsService);
    expect(service).toBeTruthy();
  });
});
