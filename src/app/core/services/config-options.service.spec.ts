import { TestBed } from '@angular/core/testing';

import { ConfigOptionsServiceService } from './config-options.service';

describe('ConfigOptionsServiceService', () => {
  let service: ConfigOptionsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigOptionsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
