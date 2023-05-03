import { TestBed } from '@angular/core/testing';

import { ChildRegistrationService } from './child-registration.service';

describe('ChildRegistrationService', () => {
  let service: ChildRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChildRegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
