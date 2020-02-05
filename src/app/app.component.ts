import { Component, OnInit, HostListener } from '@angular/core';
import { Loader } from '@shared/models/loader';
import * as AOS from 'aos';
import { TranslateService } from '@ngx-translate/core';
import { Languages } from '@shared/models/languages.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  public multiloader: Loader = {} as Loader;
  public openedMenu = false;
  public language: Languages;

  constructor(translate: TranslateService) {
    translate.setDefaultLang('br');
  }

  ngOnInit() {
    AOS.init();
    this.multiloader.about = true;
    this.multiloader.portfolio = true;
    this.multiloader.skills = true;
    this.multiloader.navbar = true;
  }

}
