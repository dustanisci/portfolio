import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Language } from '@shared/models/Language.enum';

@Component({
  selector: 'app-container-contact',
  templateUrl: './container-contact.component.html',
  styleUrls: ['./container-contact.component.scss']
})
export class ContainerContactComponent implements OnInit {

  @Input()
  public languageId: Language;

  public title: string;

  constructor(private translate: TranslateService) {
  }

  ngOnInit(): void {
    this.translate.get('COMMON.ABOUT').subscribe((res: string) => {
      this.title = res;
    });
  }

}
