import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerSkillsComponent } from './container-skills.component';

describe('ContainerTechnologiesComponent', () => {
  let component: ContainerSkillsComponent;
  let fixture: ComponentFixture<ContainerSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
