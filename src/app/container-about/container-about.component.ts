import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { About } from '@shared/models/about';
import { ContainerAboutService } from './container-about.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-container-about',
  templateUrl: './container-about.component.html',
  styleUrls: ['./container-about.component.scss']
})
export class ContainerAboutComponent implements OnInit {

  public about: About[] = [];

  @Output()
  public loader: EventEmitter<void> = new EventEmitter<void>();

  @Input()
  public set actionTranslate(changedLanguage: number) {
    this.setAbout();
  }

  constructor(
    private aboutService: ContainerAboutService,
    private translate: TranslateService) {
  }

  ngOnInit() {
    // this.dataAbout();
    this.loader.emit();
    this.setAbout();
  }

  private dataAbout(): void {
    this.aboutService.dataAbout().subscribe((about: About[]) => {
      this.about = about;
      this.loader.emit();
    }, () => this.loader.emit());
  }

  private setAbout(): void {
    this.translate.get(['ABOUT.SQUARE1', 'ABOUT.SQUARE2', 'ABOUT.SQUARE3', 'ABOUT.SQUARE4']).subscribe((res: string) => {
      this.about = [
        { description: res['ABOUT.SQUARE1'] },
        { description: res['ABOUT.SQUARE2'] },
        { description: res['ABOUT.SQUARE3'] },
        { description: res['ABOUT.SQUARE4'] }
      ];
    });
  }

}
