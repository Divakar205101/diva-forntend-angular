import { TestBed } from '@angular/core/testing';

import { ModuleFeatureService } from './module-feature.service';

describe('ModuleFeatureService', () => {
  let service: ModuleFeatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModuleFeatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
