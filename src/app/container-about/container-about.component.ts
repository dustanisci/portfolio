import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { About } from '@shared/models/about';
import { ContainerAboutService } from './container-about.service';

@Component({
  selector: 'app-container-about',
  templateUrl: './container-about.component.html',
  styleUrls: ['./container-about.component.scss']
})
export class ContainerAboutComponent implements OnInit {

  public about: About[] = [];

  @Output()
  public loader: EventEmitter<void> = new EventEmitter<void>();

  constructor(private aboutService: ContainerAboutService) { }

  ngOnInit() {
    this.dataAbout();
  }

  private dataAbout(): void {
    this.aboutService.dataAbout().subscribe((about: About[]) => {
      this.about = about;
      this.loader.emit();
    }, () => this.loader.emit());
  }

}
