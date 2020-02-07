import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ContainerSkillsService } from './container-skills.service';
import { Skills } from '@shared/models/skills';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-container-skills',
  templateUrl: './container-skills.component.html',
  styleUrls: ['./container-skills.component.scss']
})
export class ContainerSkillsComponent implements OnInit {

  @Input()
  public set actionTranslate(changedLanguage: number) {
    this.setSkills();
  }

  @Output()
  public loader: EventEmitter<void> = new EventEmitter<void>(); S

  public skills: Skills[] = [];

  constructor(
    private skillService: ContainerSkillsService,
    private translate: TranslateService) { }

  ngOnInit() {
    // this.dataTechnologies();
    this.loader.emit();
    this.setSkills();
  }


  private setSkills(): void {
    this.translate.get(['SKILLS.OTHERS', 'SKILLS.DATABASE', 'SKILLS.TEST', 'SKILLS.GIT']).subscribe((res: string) => {
      this.skills = [{
        technology: 'Front-End',
        value: [
          'HTML 5',
          'CSS 3',
          'SCSS',
          'SASS',
          'COMPASS',
          'Angular 9',
          'Javascript',
          'Typescript',
          'jQuery / Ajax',
          'Bootstrap',
          'Material',
          'Materialize',
          'Foundation',
          'SEO'
        ]
      },
      {
        technology: 'Back-End',
        value: [
          'Java',
          'JPA',
          'JWT (Tokens)',
          'OAuth 2.0',
          'Spring Boot',
          'Spring MVC',
          'Spring Security',
          'Hibernate',
          'Rest',
          'Socket',
          'Webservices'
        ]
      },
      {
        technology: res['SKILLS.OTHERS'],
        value: [
          res['SKILLS.GIT'],
          'Docker',
          'Google Analytics'
        ]
      },
      {
        technology: res['SKILLS.DATABASE'],
        value: [
          'MongoDB',
          'SQL',
          'MySQL'
        ]
      },
      {
        technology: res['SKILLS.TEST'],
        value: [
          'Jersey',
          'Jasmine',
          'Karma',
          'Phantom',
          'JUnit'
        ]
      }];
    });
  }

}
