import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ContainerSkillsService } from './container-skills.service';
import { Skills } from '@shared/models/skills';

@Component({
  selector: 'app-container-skills',
  templateUrl: './container-skills.component.html',
  styleUrls: ['./container-skills.component.scss']
})
export class ContainerSkillsComponent implements OnInit {

  public skills: Skills[] = [{
    "technology": "Front-End",
    "value": [
      "HTML 5",
      "CSS 3",
      "SCSS",
      "SASS",
      "COMPASS",
      "Angular 9",
      "Javascript",
      "Typescript",
      "jQuery / Ajax",
      "Bootstrap",
      "Material",
      "Materialize",
      "Foundation",
      "SEO"
    ]
  },
  {
    "technology": "Back-End",
    "value": [
      "Java",
      "JPA",
      "JWT (Tokens)",
      "OAuth 2.0",
      "Spring Boot",
      "Spring MVC",
      "Spring Security",
      "Hibernate",
      "Rest",
      "Socket",
      "Webservices"
    ]
  },
  {
    "technology": "Others",
    "value": [
      "Versionamento de código - GIT",
      "Docker",
      "Google Analytics"
    ]
  },
  {
    "technology": "Database",
    "value": [
      "MongoDB",
      "SQL Server",
      "MySQL Server"
    ]
  },
  {
    "technology": "Test",
    "value": [
      "Jersey",
      "Jasmine",
      "Karma",
      "Phantom",
      "JUnit"
    ]
  }];

  @Output()
  public loader: EventEmitter<void> = new EventEmitter<void>();

  constructor(private skillService: ContainerSkillsService) { }

  ngOnInit() {
    // this.dataTechnologies();
    this.loader.emit()
  }

  // private dataTechnologies(): void {
  //   this.skillService.dataTechnologies().subscribe((skills: Skills[]) => {
  //     this.skills = skills;
  //     this.loader.emit();
  //   }, () => this.loader.emit());
  // }

}
