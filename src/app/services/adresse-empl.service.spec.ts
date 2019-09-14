import { TestBed, inject } from '@angular/core/testing';

import { AdresseEmplService } from './adresse-empl.service';

describe('AdresseEmplService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdresseEmplService]
    });
  });

  it('should be created', inject([AdresseEmplService], (service: AdresseEmplService) => {
    expect(service).toBeTruthy();
  }));
});
