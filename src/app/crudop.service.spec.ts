import { TestBed } from '@angular/core/testing';

import { CrudopService } from './crudop.service';

describe('CrudopService', () => {
  let service: CrudopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
