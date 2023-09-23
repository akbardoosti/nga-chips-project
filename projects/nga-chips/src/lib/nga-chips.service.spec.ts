import { TestBed } from '@angular/core/testing';

import { NgaChipsService } from './nga-chips.service';

describe('NgaChipsService', () => {
  let service: NgaChipsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgaChipsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
