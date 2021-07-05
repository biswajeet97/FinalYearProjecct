import { TestBed } from '@angular/core/testing';

import { AuthCancelGuard } from './auth-cancel.guard';

describe('AuthCancelGuard', () => {
  let guard: AuthCancelGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthCancelGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
