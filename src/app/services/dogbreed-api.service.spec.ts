import { TestBed } from '@angular/core/testing';

import { DogbreedApiService } from './dogbreed-api.service';

describe('DogbreedApiService', () => {
  let service: DogbreedApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DogbreedApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
