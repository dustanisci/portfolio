import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerTechnologiesComponent } from './container-technologies.component';

describe('ContainerTechnologiesComponent', () => {
  let component: ContainerTechnologiesComponent;
  let fixture: ComponentFixture<ContainerTechnologiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerTechnologiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerTechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
