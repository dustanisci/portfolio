import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContainerAboutComponent } from './container-about/container-about.component';
import { ContainerContactComponent } from './container-contact/container-contact.component';
import { ContainerPortfolioComponent } from './container-portfolio/container-portfolio.component';
import { ContainerTechnologiesComponent } from './container-technologies/container-technologies.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerAboutComponent,
    ContainerContactComponent,
    ContainerPortfolioComponent,
    ContainerTechnologiesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
