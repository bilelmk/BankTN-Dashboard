import { TestBed, inject } from '@angular/core/testing';

import { AgenceService } from './agence.service';

describe('AgenceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgenceService]
    });
  });

  it('should be created', inject([AgenceService], (service: AgenceService) => {
    expect(service).toBeTruthy();
  }));
});
