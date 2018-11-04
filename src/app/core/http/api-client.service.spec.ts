import { TestBed } from '@angular/core/testing';

import { ApiClient } from './api-client.service';

describe('ApiClient', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiClient = TestBed.get(ApiClient);
    expect(service).toBeTruthy();
  });
});
