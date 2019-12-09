import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './section/home/home.component';
import { AboutComponent } from './section/about/about.component';
import { ContactComponent } from './section/contact/contact.component';
import { PortfolioComponent } from './section/portfolio/portfolio.component';
import { TechnologiesComponent } from './section/technologies/technologies.component';
import { NavbarSectionComponent } from '@shared/components/navbar-section/navbar-section.component';
import { NavbarIconComponent } from '@shared/components/navbar-icon/navbar-icon.component';
import { ContainerFluidComponent } from './shared/components/container-fluid/container-fluid.component';
import { FooterComponent } from '@shared/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PortfolioComponent,
    TechnologiesComponent,
    NavbarSectionComponent,
    NavbarIconComponent,
    ContainerFluidComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
