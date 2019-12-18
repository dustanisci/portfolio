import { Component, OnInit, HostListener, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private isMobile = false;
  private isMenuOpen = false;
  @Output() clickedItem: EventEmitter<ElementRef> = new EventEmitter();
  @ViewChild('home', { static: false }) home: ElementRef;


  constructor() { }

  ngOnInit() {
    const event = { target: { innerWidth: window.screen.width } };
    this.onResize(event);
  }

  @HostListener('window:resize', ['$event'])
  public onResize(event) {
    event.target.innerWidth <= 950 ? this.isMobile = true : this.isMobile = false;
  }

}
