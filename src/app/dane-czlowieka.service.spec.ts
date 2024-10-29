import { TestBed } from '@angular/core/testing';

import { DaneCzlowiekaService } from './dane-czlowieka.service';

describe('DaneCzlowiekaService', () => {
  let service: DaneCzlowiekaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DaneCzlowiekaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
