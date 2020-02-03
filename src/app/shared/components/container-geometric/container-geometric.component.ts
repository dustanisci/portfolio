import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-container-geometric',
  templateUrl: './container-geometric.component.html',
  styleUrls: ['./container-geometric.component.scss']
})
export class ContainerGeometricComponent {

  @Input() backgroundColor: ContainerGeometric;
  @Input() color: string;
  @Input() reverse = false;
  public _background: string;

  constructor() { }

  ngOnInit() {
    switch (this.backgroundColor) {
      case 1:
        this._background = 'assets/img/wallpaper1.png';
        break;

      case 2:
        this._background = 'assets/img/wallpaper2.png';
        break;

      case 3:
        this._background = 'assets/img/wallpaper3.png';
        break;
    }
  }

}

export enum ContainerGeometric {
  Blue = 1,
  LightBlue = 2,
  Pink = 3
}
