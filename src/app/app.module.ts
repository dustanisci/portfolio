import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './section/home/home.component';
import { AboutComponent } from './section/about/about.component';
import { ContactComponent } from './section/contact/contact.component';
import { PortfolioComponent } from './section/portfolio/portfolio.component';
import { TechnologiesComponent } from './section/technologies/technologies.component';
import { ContainerFluidComponent } from './shared/components/container-fluid/container-fluid.component';
import { FooterComponent } from '@shared/components/footer/footer.component';
import { NavbarComponent } from '@shared/components/navbar/navbar.component';
import { ScrollPointComponent } from './shared/components/scroll-point/scroll-point.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PortfolioComponent,
    TechnologiesComponent,
    ContainerFluidComponent,
    FooterComponent,
    NavbarComponent,
    ScrollPointComponent
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
