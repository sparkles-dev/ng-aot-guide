import { TestBed, inject } from '@angular/core/testing';

import { BttfService } from './bttf.service';

describe('BttfService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BttfService]
    });
  });

  it('should be created', inject([BttfService], (service: BttfService) => {
    expect(service).toBeTruthy();
  }));
});
