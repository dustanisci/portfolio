import { Component, OnInit, Input, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';
import { Dropdown } from '@shared/models/dropdown';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input()
  public items: Dropdown[] = [];

  @Output()
  public value: EventEmitter<number> = new EventEmitter<number>();

  public label: string;
  public isActive = false;
  public hiddenList = false;

  constructor(private ref: ElementRef) { }

  ngOnInit() {
    this.label = this.items.find(item => item.selected === true).label;
  }

  public action(item: Dropdown) {
    this.value.emit(item.value);
    this.label = item.label;
    this.isActive = false
    setTimeout(() => this.hiddenList = !this.hiddenList, 1000);
  }

  @HostListener('document:click')
  @HostListener('window:scroll')
  public onClick() {
    if (!this.ref.nativeElement.contains(event.target)) {
      this.isActive = false
      setTimeout(() => this.hiddenList = false, 1000);
    }
  }



}
