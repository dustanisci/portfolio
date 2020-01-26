import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Technologies } from '@shared/models/technologies';
import { ContainerSkillsService } from './container-skills.service';
import { Skills } from '@shared/models/skills';

@Component({
  selector: 'app-container-skills',
  templateUrl: './container-skills.component.html',
  styleUrls: ['./container-skills.component.scss']
})
export class ContainerSkillsComponent implements OnInit {

  public skills: Skills = {} as Skills;

  @Output()
  public loader: EventEmitter<void> = new EventEmitter<void>();

  constructor(private skillService: ContainerSkillsService) { }

  ngOnInit() {
    this.dataTechnologies();
  }

  private dataTechnologies(): void {
    this.skillService.dataTechnologies().subscribe((technology: Technologies[]) => {
      technology.map(resp => {
        switch (resp.type) {
          case 1:
            this.skills.frontend = resp.names;
            break;
          case 2:
            this.skills.backend = resp.names;
            break;
          case 3:
            this.skills.other = resp.names;
            break;
          case 4:
            this.skills.database = resp.names;
            break;
          case 5:
            this.skills.test = resp.names;
            break;
        }
        this.loader.emit();
      }, () => this.loader.emit());
    });
  }

}
