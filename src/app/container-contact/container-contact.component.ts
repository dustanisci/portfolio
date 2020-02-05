import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-container-contact',
  templateUrl: './container-contact.component.html',
  styleUrls: ['./container-contact.component.scss']
})
export class ContainerContactComponent implements OnInit {

  @Input()
  public translate: TranslateService;

  public title: string;

  constructor() {
  }

  ngOnInit(): void {
    this.translate.get('COMMON.ABOUT').subscribe((res: string) => {
      this.title = res;
    });
  }

}
