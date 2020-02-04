import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { About } from '@shared/models/about';
import { ContainerAboutService } from './container-about.service';

@Component({
  selector: 'app-container-about',
  templateUrl: './container-about.component.html',
  styleUrls: ['./container-about.component.scss']
})
export class ContainerAboutComponent implements OnInit {

  public about: About[] = [
    {
      "description": "Desenvolvedor com mais de 5 anos de experiência, graduado pelo Senac SP e com conhecimentos nas tecnologias atuais do mercado."
    },
    {
      "description": "Expert no framework Angular, o qual já desenvolveu muitos sites e sistemas internos."
    },
    {
      "description": "No momento se dedica no inglês e em cursos relacionados da área. Seu próximo objetivo é fazer uma pós-graduação em Big Data ou Inteligência Artificial."
    },
    {
      "description": "Alguns de seus hobbies são desenhar, viajar e jogos de raciocínio lógico :P"
    }
  ];

  @Output()
  public loader: EventEmitter<void> = new EventEmitter<void>();

  constructor(private aboutService: ContainerAboutService) { }

  ngOnInit() {
    // this.dataAbout();
    this.loader.emit();
  }

  // private dataAbout(): void {
  //   this.aboutService.dataAbout().subscribe((about: About[]) => {
  //     this.about = about;
  //     this.loader.emit();
  //   }, () => this.loader.emit());
  // }

}
