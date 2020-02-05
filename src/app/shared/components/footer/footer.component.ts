import { Component, Input, OnInit } from '@angular/core';
import { Languages } from '@shared/models/languages.enum';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  public year = new Date().getFullYear();
  public copyright: string;

  @Input()
  public set actionLanguage(language: Languages) {
    this.translations();
  }

  constructor(
    private translate: TranslateService) { 
      this.translations();
    }

  private translations(): void {
    this.translate.get('FOOTER.COPYRIGHT').subscribe((res: string) => {
      this.copyright = res;
    });
  }

}
