import { TestBed } from '@angular/core/testing';

import { ContainerSkillsService } from './container-skills.service';

describe('ContainerSkillsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContainerSkillsService = TestBed.get(ContainerSkillsService);
    expect(service).toBeTruthy();
  });
});
