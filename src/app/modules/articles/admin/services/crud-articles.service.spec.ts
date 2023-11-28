import { TestBed } from '@angular/core/testing';

import { CrudArticlesService } from './crud-articles.service';

describe('CrudArticlesService', () => {
  let service: CrudArticlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudArticlesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
