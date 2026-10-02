import { TestBed } from '@angular/core/testing';

import { FloristService } from './florist-service';

describe('FloristService', () => {
  let service: FloristService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FloristService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
