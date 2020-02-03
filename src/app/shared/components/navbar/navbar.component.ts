import { Component, OnInit, ElementRef, ViewChild, HostListener, Output, EventEmitter, Renderer2 } from '@angular/core';
import { Navbar, Target } from '@shared/models/navbar';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public navbar: Navbar[] = [];
  public openMenu = false;

  @Output()
  public loader: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  public openedMenu: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private navbarService: NavbarService) { }

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

  @HostListener('window:resize', ['$event'])
  public onResize(event) {
    if (event.target.innerWidth > 700 && this.openMenu === true) {
      this.openMenu = false;
      this.openedMenu.emit(false);
      this.lockScrollBody();
    }
  }

}
