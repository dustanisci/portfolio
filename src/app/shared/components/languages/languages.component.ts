import { Component, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent {

  @Input()
  public openedMenu = false;

  public hidden = false;
  public opacity = false;

  constructor() { }

  @HostListener('window:scroll', ['$event'])
  public onScroll() {
    if (window.pageYOffset >= 200 && this.openedMenu === false) {
      this.opacity = true;
      setTimeout(() => this.hidden = true, 1000);
    } else {
      this.hidden = false;
      this.opacity = false;
    }
  }

}
