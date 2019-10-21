import { TestBed } from '@angular/core/testing';

import { TsdService } from './tsd.service';

describe('TsdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TsdService = TestBed.get(TsdService);
    expect(service).toBeTruthy();
  });
});
