import { Component, OnInit } from '@angular/core';
import { Technologies } from '@shared/interfaces/technologies';
import { ContainerSkillsService } from './container-skills.service';

@Component({
  selector: 'app-container-skills',
  templateUrl: './container-skills.component.html',
  styleUrls: ['./container-skills.component.scss']
})
export class ContainerSkillsComponent implements OnInit {

  public frontend: string[] = [];
  public backend: string[] = [];
  public other: string[] = [];
  public test: string[] = [];
  public database: string[] = [];

  constructor(private skillService: ContainerSkillsService) { }

  ngOnInit() {
    this.dataTechnologies();
  }

  private dataTechnologies(): void {
    this.skillService.dataTechnologies().subscribe((technology: Technologies[]) => {
      technology.map(resp => {
        switch (resp.type) {
          case 1:
            this.frontend = resp.names;
            break;
          case 2:
            this.backend = resp.names;
            break;
          case 3:
            this.other = resp.names;
            break;
          case 4:
            this.database = resp.names;
            break;
          case 5:
            this.test = resp.names;
            break;
        }
      });
    });
  }

}
