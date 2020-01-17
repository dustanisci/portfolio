import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerGeometricComponent } from './container-geometric.component';

describe('ContainerGeometricComponent', () => {
  let component: ContainerGeometricComponent;
  let fixture: ComponentFixture<ContainerGeometricComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerGeometricComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerGeometricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
