import { TestBed } from '@angular/core/testing';

import { OurProductsService } from './our-products.service';

describe('OurProductsService', () => {
  let service: OurProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OurProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
