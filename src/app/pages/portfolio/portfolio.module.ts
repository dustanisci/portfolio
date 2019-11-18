import { NgModule } from '@angular/core';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';

@NgModule({
  declarations: [
    PortfolioComponent
  ],
  imports: [
    PortfolioRoutingModule
  ]
})
export class PortfolioModule { }
