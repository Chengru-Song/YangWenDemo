import { TestBed } from '@angular/core/testing';

import { CatogoryFetchService } from './catogory-fetch.service';

describe('CatogoryFetchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CatogoryFetchService = TestBed.get(CatogoryFetchService);
    expect(service).toBeTruthy();
  });
});
