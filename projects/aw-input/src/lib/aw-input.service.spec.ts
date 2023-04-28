import { TestBed } from '@angular/core/testing';

import { AwInputService } from './aw-input.service';

describe('AwInputService', () => {
  let service: AwInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AwInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
