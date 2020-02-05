import { Component, OnInit, HostListener, Output, EventEmitter, Input } from '@angular/core';
import { Navbar } from '@shared/models/navbar';
import { Dropdown } from '@shared/models/dropdown';
import { TranslateService } from '@ngx-translate/core';
import { Languages } from '@shared/models/languages.enum';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output()
  public loader: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  public openedMenu: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input()
  public translate: TranslateService;

  public navbar: Navbar[] = [];
  public openMenu = false;
  public languages: Dropdown[] = [];

  constructor() {
  }

  ngOnInit() {
    // this.dataNavbar();
    this.loader.emit();
    this.setTranslateNavbar();

    // This is temporary until the webservice is created
    this.translate.get(['LANGUAGE.SPA', 'LANGUAGE.BR', 'LANGUAGE.ENG']).subscribe((res: string) => {
      this.languages = [
        {
          label: res['LANGUAGE.BR'],
          value: 0,
          selected: true
        },
        {
          label: res['LANGUAGE.ENG'],
          value: 1,
          selected: false
        },
        {
          label: res['LANGUAGE.SPA'],
          value: 2,
          selected: false
        }
      ];
    });
  }

  private lockScrollBody(): void {
    this.openMenu ? document.querySelector('body').style.overflowY = 'hidden' : document.querySelector('body').style.overflowY = 'scroll';
  }

  public navbarAction(isOpen: boolean): void {
    this.openMenu = isOpen;
    this.openedMenu.emit(isOpen);
    this.lockScrollBody();
  }

  public setPositionScroll(id: string) {
    const axisY = document.getElementById(id.replace('#', '')).getBoundingClientRect();
    window.scrollBy(0, axisY.top - 100);
  }

  public setLanguage(value: number) {
    if (value === Languages.English) {
      this.translate.use('en');
    } else if (value === Languages.Portuguese) {
      this.translate.use('br');
    } else {
      this.translate.use('esp');
    }

    this.setTranslateNavbar();

    this.translate.get(['LANGUAGE.SPA', 'LANGUAGE.BR', 'LANGUAGE.ENG']).subscribe((res: string) => {
      this.languages[0].label = res['LANGUAGE.BR'];
      this.languages[1].label = res['LANGUAGE.ENG'];
      this.languages[2].label = res['LANGUAGE.SPA'];
    });
  }

  // This is temporary until the webservice is created
  private setTranslateNavbar(): void {
    this.translate.get(['COMMON.ABOUT', 'COMMON.PORTFOLIO', 'COMMON.CONTACT', 'COMMON.SKILLS']).subscribe((res: string) => {
      this.navbar = [{
        name: res['COMMON.ABOUT'],
        link: '#about',
      },
      {
        name: res['COMMON.SKILLS'],
        link: '#skills',
      },
      {
        name: res['COMMON.PORTFOLIO'],
        link: '#portfolio',
      },
      {
        name: res['COMMON.CONTACT'],
        link: '#contact',
      }];
    });
  }

  @HostListener('window:resize', ['$event'])
  public onResize(event) {
    if (event.target.innerWidth > 767 && this.openMenu === true) {
      this.openMenu = false;
      this.openedMenu.emit(false);
      this.lockScrollBody();
    }
  }

}
