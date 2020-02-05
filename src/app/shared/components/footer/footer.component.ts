import { Component, Input, AfterContentInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements AfterContentInit {

  public year = new Date().getFullYear();
  public copyright: string;

  @Input()
  public translate: TranslateService;

  constructor() {
  }

  ngAfterContentInit(): void {
    this.translations();
  }

  private translations(): void {
    this.translate.get('FOOTER.COPYRIGHT').subscribe((res: string) => {
      this.copyright = res;
    });
  }

}
