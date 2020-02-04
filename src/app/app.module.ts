import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContainerAboutComponent } from './container-about/container-about.component';
import { ContainerContactComponent } from './container-contact/container-contact.component';
import { ContainerPortfolioComponent } from './container-portfolio/container-portfolio.component';
import { FooterComponent } from '@shared/components/footer/footer.component';
import { NavbarComponent } from '@shared/components/navbar/navbar.component';
import { ContainerGeometricComponent } from './shared/components/container-geometric/container-geometric.component';
import { ContainerSkillsComponent } from './container-skills/container-skills.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ModalComponent } from './shared/components/modal/modal.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { DropdownComponent } from './shared/components/dropdown/dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerAboutComponent,
    ContainerContactComponent,
    ContainerPortfolioComponent,
    ContainerSkillsComponent,
    FooterComponent,
    NavbarComponent,
    ContainerGeometricComponent,
    ModalComponent,
    DropdownComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
