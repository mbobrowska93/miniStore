import { TestBed } from '@angular/core/testing';

import { DataInitializerService } from './data-initializer.service';

describe('DataInitializerService', () => {
  let service: DataInitializerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataInitializerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
