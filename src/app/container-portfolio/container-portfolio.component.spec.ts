import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerPortfolioComponent } from './container-portfolio.component';

describe('ContainerPortfolioComponent', () => {
  let component: ContainerPortfolioComponent;
  let fixture: ComponentFixture<ContainerPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
