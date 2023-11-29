import { TestBed } from '@angular/core/testing';

import { CrudProductsService } from './crud-products.service';

describe('CrudProductsService', () => {
  let service: CrudProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
