import { TestBed } from '@angular/core/testing';

import { StopGetterService } from './stop-getter.service';

describe('StopGetterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StopGetterService = TestBed.get(StopGetterService);
    expect(service).toBeTruthy();
  });
});
