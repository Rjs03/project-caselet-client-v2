import { TestBed } from '@angular/core/testing';

import { CaseletService } from './caselet.service';

describe('CaseletService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CaseletService = TestBed.get(CaseletService);
    expect(service).toBeTruthy();
  });
});
