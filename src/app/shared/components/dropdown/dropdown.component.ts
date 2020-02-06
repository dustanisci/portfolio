import { Component, OnInit, Input, Output, EventEmitter, HostListener, ElementRef, OnChanges } from '@angular/core';
import { Dropdown } from '@shared/models/dropdown';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnChanges {

  @Input()
  public items: Dropdown[] = [];

  @Output()
  public value: EventEmitter<number> = new EventEmitter<number>();

  public label: string;
  public isActive = false;
  public hiddenList = false;

  constructor(private ref: ElementRef) { }

  ngOnChanges(): void {
    this.label = this.items ? this.items.find(item => item.selected === true).label : '';
  }

  public action(item: Dropdown) {
    this.value.emit(item.value);
    this.label = item.label;
    this.isActive = false;
    setTimeout(() => this.hiddenList = !this.hiddenList, 1000);
  }

  @HostListener('document:click', ['$event'])
  @HostListener('window:scroll', ['$event'])
  public onClick(event) {
    if (!this.ref.nativeElement.contains(event.target)) {
      this.isActive = false;
      setTimeout(() => this.hiddenList = false, 1000);
    }
  }
}
