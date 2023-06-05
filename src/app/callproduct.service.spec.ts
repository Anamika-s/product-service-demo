import { TestBed } from '@angular/core/testing';

import { CallproductService } from './callproduct.service';

describe('CallproductService', () => {
  let service: CallproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
