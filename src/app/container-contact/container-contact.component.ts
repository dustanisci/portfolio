import { Component, Input } from '@angular/core';
import { Languages } from '@shared/models/languages.enum';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-container-contact',
  templateUrl: './container-contact.component.html',
  styleUrls: ['./container-contact.component.scss']
})
export class ContainerContactComponent {

  public title: string;
  @Input()
  public set actionLanguage(language: Languages) {
    this.translations();
  }

  constructor(
    private translate: TranslateService) {
    this.translations();
  }

  private translations(): void {
    this.translate.get('COMMON.CONTACT').subscribe((res: string) => {
      this.title = res;
    });
  }

}
