import { TestBed } from '@angular/core/testing';

import { NavHoverService } from './nav-hover.service';

describe('NavHoverService', () => {
  let service: NavHoverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavHoverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
