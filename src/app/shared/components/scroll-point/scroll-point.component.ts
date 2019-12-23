import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scroll-point',
  templateUrl: './scroll-point.component.html',
  styleUrls: ['./scroll-point.component.scss']
})
export class ScrollPointComponent implements OnInit {

  @Input() id;
  
  constructor() { }

  ngOnInit() {
  }

}
