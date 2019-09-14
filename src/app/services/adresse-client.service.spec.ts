import { TestBed, inject } from '@angular/core/testing';

import { AdresseClientService } from './adresse-client.service';

describe('AdresseClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdresseClientService]
    });
  });

  it('should be created', inject([AdresseClientService], (service: AdresseClientService) => {
    expect(service).toBeTruthy();
  }));
});
