import { TestBed, inject } from '@angular/core/testing';

import { GpsDataService } from './gps-data.service';

describe('GpsDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GpsDataService]
    });
  });

  it('should be created', inject([GpsDataService], (service: GpsDataService) => {
    expect(service).toBeTruthy();
  }));
});
