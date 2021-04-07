import { TestBed } from '@angular/core/testing';

import { MyerrorhandelerService } from './myerrorhandeler.service';

describe('MyerrorhandelerService', () => {
  let service: MyerrorhandelerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyerrorhandelerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
