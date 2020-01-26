import { TestBed } from '@angular/core/testing';

import { ContainerAboutService } from './container-about.service';

describe('ContainerAboutService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContainerAboutService = TestBed.get(ContainerAboutService);
    expect(service).toBeTruthy();
  });
});
