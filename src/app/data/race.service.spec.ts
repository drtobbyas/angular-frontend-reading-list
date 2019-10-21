import { TestBed } from '@angular/core/testing';

import { RaceService } from './race.service';

import { HttpClient } from '@angular/common/http';

describe('RaceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [HttpClient]
  }));

  it('should be created', () => {
    const service: RaceService = TestBed.get(RaceService);
    expect(service).toBeTruthy();
  });
});
