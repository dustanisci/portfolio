import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerAboutComponent } from './container-about.component';

describe('ContainerAboutComponent', () => {
  let component: ContainerAboutComponent;
  let fixture: ComponentFixture<ContainerAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
