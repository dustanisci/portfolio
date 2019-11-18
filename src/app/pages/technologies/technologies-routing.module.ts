import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TechnologiesComponent } from './technologies.component';

const technologiesRoutes: Routes = [
  { path: '', component: TechnologiesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(technologiesRoutes)],
  exports: [RouterModule]
})
export class TechnologiesRoutingModule { }
