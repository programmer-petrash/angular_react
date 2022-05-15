import { TestBed } from '@angular/core/testing';

import { FacultiesServiceService } from './faculties-service.service';

describe('FacultiesServiceService', () => {
  let service: FacultiesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacultiesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
