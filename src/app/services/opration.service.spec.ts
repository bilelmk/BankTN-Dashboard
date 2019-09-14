import { TestBed, inject } from '@angular/core/testing';

import { OprationService } from './opration.service';

describe('OprationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OprationService]
    });
  });

  it('should be created', inject([OprationService], (service: OprationService) => {
    expect(service).toBeTruthy();
  }));
});
