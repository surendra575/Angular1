import { TestBed } from '@angular/core/testing';

import { CitizenRegistrationService } from './citizen-registration.service';

describe('CitizenRegistrationService', () => {
  let service: CitizenRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CitizenRegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
