import { Component, OnInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import { Navbar, Target } from '@shared/interfaces/navbar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public navbar: Navbar[] = [{
    name: 'About',
    link: '#about',
    target: Target.None
  },
  {
    name: 'Skills',
    link: '#skills',
    target: Target.None
  },
  {
    name: 'Portfolio',
    link: '#portfolio',
    target: Target.None
  },
  {
    name: 'Contact',
    link: '#contact',
    target: Target.None
  }];

  public isMenuOpen = false;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:resize', ['$event'])
  public onResize(event) {
    event.target.innerWidth > 700 && this.isMenuOpen === true ? this.isMenuOpen = false : '';
  }

}
