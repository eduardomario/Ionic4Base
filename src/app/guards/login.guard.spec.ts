import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginGuard } from './login.guard';

describe('LoginGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginGuard],
      imports: [RouterTestingModule],
    });
  });

  it('should ...', inject([LoginGuard], (guard: LoginGuard) => {
    expect(guard).toBeTruthy();
  }));
});
