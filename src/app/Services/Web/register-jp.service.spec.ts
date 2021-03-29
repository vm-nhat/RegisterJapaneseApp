import { TestBed } from '@angular/core/testing';

import { RegisterJpService } from './register-jp.service';

describe('RegisterJpService', () => {
  let service: RegisterJpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterJpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
