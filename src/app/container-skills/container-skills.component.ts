import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ContainerSkillsService } from './container-skills.service';
import { Skills } from '@shared/models/skills';

@Component({
  selector: 'app-container-skills',
  templateUrl: './container-skills.component.html',
  styleUrls: ['./container-skills.component.scss']
})
export class ContainerSkillsComponent implements OnInit {

  public skills: Skills[] = [];

  @Output()
  public loader: EventEmitter<void> = new EventEmitter<void>();

  constructor(private skillService: ContainerSkillsService) { }

  ngOnInit() {
    this.dataTechnologies();
  }

  private dataTechnologies(): void {
    this.skillService.dataTechnologies().subscribe((skills: Skills[]) => {
      this.skills = skills;
      this.loader.emit();
    }, () => this.loader.emit());
  }

}
