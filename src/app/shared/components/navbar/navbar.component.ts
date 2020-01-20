import { Component, OnInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import { Navbar, Target } from '@shared/interfaces/navbar';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public navbar: Navbar[] = [];
  public isMenuOpen = false;

  constructor(private navbarService: NavbarService) { }

  ngOnInit() {
    this.dataNavbar();
  }

  private dataNavbar(): void {
    this.navbarService.dataNavbar().subscribe((navbar: Navbar[]) => {
      this.navbar = navbar;
    });
  }

  @HostListener('window:resize', ['$event'])
  public onResize(event) {
    event.target.innerWidth > 700 && this.isMenuOpen === true ? this.isMenuOpen = false : '';
  }

}
