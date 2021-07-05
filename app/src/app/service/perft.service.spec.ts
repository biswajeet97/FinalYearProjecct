import { TestBed } from '@angular/core/testing';

import { PerftService } from './perft.service';

describe('PerftService', () => {
  let service: PerftService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerftService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
