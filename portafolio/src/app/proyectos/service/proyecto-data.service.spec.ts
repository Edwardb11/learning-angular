import { TestBed } from '@angular/core/testing';

import { ProyectoDataService } from './proyecto-data.service';

describe('ProyectoDataService', () => {
  let service: ProyectoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProyectoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
