import { NgModule } from '@angular/core';
import { TechnologiesRoutingModule } from './technologies-routing.module';
import { TechnologiesComponent } from './technologies.component';

@NgModule({
  declarations: [
    TechnologiesComponent
  ],
  imports: [
    TechnologiesRoutingModule
  ]
})
export class TechnologiesModule { }
