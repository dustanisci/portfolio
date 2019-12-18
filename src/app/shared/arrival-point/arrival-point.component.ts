import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-arrival-point',
  templateUrl: './arrival-point.component.html',
  styleUrls: ['./arrival-point.component.scss']
})
export class ArrivalPointComponent {

  @Input() id: string;

}
