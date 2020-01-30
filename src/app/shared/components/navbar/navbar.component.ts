import { Component, OnInit, ElementRef, ViewChild, HostListener, Output, EventEmitter } from '@angular/core';
import { Navbar, Target } from '@shared/models/navbar';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public navbar: Navbar[] = [];
  public menuOpened = false;

  @Output()
  public loader: EventEmitter<void> = new EventEmitter<void>();

  constructor(private navbarService: NavbarService) { }

  ngOnInit() {
    this.dataNavbar();
  }

  private dataNavbar(): void {
    this.navbarService.dataNavbar().subscribe((navbar: Navbar[]) => {
      this.navbar = navbar;
      this.loader.emit();
    }, () => this.loader.emit());
  }

  @HostListener('window:resize', ['$event'])
  public onResize(event) {
    event.target.innerWidth > 700 && this.menuOpened === true ? this.menuOpened = false : '';
  }

}
