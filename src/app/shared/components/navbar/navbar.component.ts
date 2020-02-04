import { Component, OnInit, ElementRef, ViewChild, HostListener, Output, EventEmitter, Renderer2 } from '@angular/core';
import { Navbar, Target } from '@shared/models/navbar';
import { NavbarService } from './navbar.service';
import { Dropdown } from '@shared/models/dropdown';
import { Languages } from '@shared/models/languages.enum';
import { TranslateService } from '@ngx-translate/core';

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

  public navbar: Navbar[] = [];
  public openMenu = false;
  public languages: Dropdown[] = [
    {
      label: 'Portuguese',
      value: 0,
      selected: true
    },
    {
      label: 'English',
      value: 1,
      selected: false
    },
    {
      label: 'Spanish',
      value: 2,
      selected: false
    }
  ];

  constructor(
    private navbarService: NavbarService,
    private translate: TranslateService) { }

  ngOnInit() {
    this.dataNavbar();
  }

  private dataNavbar(): void {
    this.navbarService.dataNavbar().subscribe((navbar: Navbar[]) => {
      this.navbar = navbar;
      this.loader.emit();
    }, () => this.loader.emit());
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
    console.log('rodou')
    if (value === Languages.English) {
      this.translate.setDefaultLang('en');
    } else if (value === Languages.Portuguese) {
      this.translate.setDefaultLang('br');
    } else {
      this.translate.setDefaultLang('esp');
    }
    console.log(this.translate);
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
