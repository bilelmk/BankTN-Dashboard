import { TestBed, inject } from '@angular/core/testing';

import { AdresseEmployeeService } from './adresse-employee.service';

describe('AdresseEmployeeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdresseEmployeeService]
    });
  });

  it('should be created', inject([AdresseEmployeeService], (service: AdresseEmployeeService) => {
    expect(service).toBeTruthy();
  }));
});
