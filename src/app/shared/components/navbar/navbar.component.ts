import { Component, OnInit, HostListener, Output, EventEmitter, Input } from '@angular/core';
import { Navbar } from '@shared/models/navbar';
import { Dropdown } from '@shared/models/dropdown';
import { TranslateService } from '@ngx-translate/core';
import { Language } from '@shared/models/Language.enum';

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

  @Output()
  public changedLanguage: EventEmitter<number> = new EventEmitter<number>();

  public navbar: Navbar[] = [];
  public openMenu = false;
  public language: Dropdown[] = [];

  constructor(private translate: TranslateService) {
  }

  ngOnInit() {
    // this.dataNavbar();
    this.loader.emit();
    this.translateAction(Language.Portuguese);
  }

  private lockScrollBody(): void {
    this.openMenu ? document.querySelector('body').style.overflowY = 'hidden' : document.querySelector('body').style.overflowY = 'scroll';
  }

  public navbarAction(isOpen: boolean): void {
    this.openMenu = isOpen;
    this.openedMenu.emit(isOpen);
    this.lockScrollBody();
  }

  public translateAction(id: Language): void {
    this.setLanguage(id);
    this.setTranslateLanguage(id);
    this.setTranslateNavbar();
    this.changedLanguage.emit(id);
  }

  public setPositionScroll(id: string) {
    const axisY = document.getElementById(id.replace('#', '')).getBoundingClientRect();
    window.scrollBy(0, axisY.top - 100);
  }

  public setLanguage(id: Language) {
    if (id === Language.English) {
      this.translate.use('en');
    } else if (id === Language.Portuguese) {
      this.translate.use('br');
    } else {
      this.translate.use('esp');
    }
  }

  private setTranslateLanguage(id: Language): void {
    this.translate.get(['LANGUAGE.ENG', 'LANGUAGE.BR', 'LANGUAGE.SPA']).subscribe((res: string) => {
      this.language = [{
        label: res['LANGUAGE.ENG'],
        value: 0,
        selected: false
      },
      {
        label: res['LANGUAGE.BR'],
        value: 1,
        selected: false
      },
      {
        label: res['LANGUAGE.SPA'],
        value: 2,
        selected: false
      }];
      this.language.find(language => language.value === id).selected = true;
    });
  }

  private setTranslateNavbar(): void {
    this.translate.get(['COMMON.ABOUT', 'COMMON.SKILLS', 'COMMON.PORTFOLIO', 'COMMON.CONTACT']).subscribe((res: string) => {
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
