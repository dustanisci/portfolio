import { TestBed } from '@angular/core/testing';

import { ContainerPortfolioService } from './container-portfolio.service';

describe('ContainerPortfolioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContainerPortfolioService = TestBed.get(ContainerPortfolioService);
    expect(service).toBeTruthy();
  });
});
