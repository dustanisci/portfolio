import { Component, OnInit } from '@angular/core';
import { Loader } from '@shared/models/loader';
import * as AOS from 'aos';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  public multiloader: Loader = {} as Loader;
  public openedMenu = false;
  public changedLanguage: number;

  constructor() {
  }

  ngOnInit(): void {
    AOS.init();
    this.multiloader.about = true;
    this.multiloader.portfolio = true;
    this.multiloader.skills = true;
    this.multiloader.navbar = true;
  }

}
