import { TestBed } from '@angular/core/testing';

import { ServiceSService } from './service-s.service';

describe('ServiceSService', () => {
  let service: ServiceSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
