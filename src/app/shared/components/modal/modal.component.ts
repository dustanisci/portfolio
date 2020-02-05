import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Portfolio } from '@shared/models/portfolio';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent {

  public showModal = false;
  @Input()
  public set actionModal(showModal: boolean) {
    this._actionModal(showModal);
  }

  @Output()
  private closed: EventEmitter<void> = new EventEmitter<void>();

  public project: Portfolio = {} as Portfolio;
  @Input()
  public set setProject(project: Portfolio) {
    this.project = project;
  }

  @ViewChild('img', { static: false })
  public img: ElementRef;

  public index = 0;

  constructor(private renderer: Renderer2) {
  }

  private _actionModal(showModal: boolean) {
    this.showModal = showModal;
    this.index = 0;

    if (this.showModal) {
      document.querySelector('body').style.overflowY = 'hidden';
    } else {
      this.closed.emit();
      document.querySelector('body').style.overflowY = 'scroll';
    }
  }

  public nextImage(): void {
    const auxIndex: number = this.index + 1;
    if (this.project.galerias[auxIndex].url_galeria.length) {
      this.opacity();
      this.index++;
    }
  }

  public previousImage(): void {
    const auxIndex: number = this.index - 1;
    if (this.project.galerias[auxIndex].url_galeria.length) {
      this.opacity();
      this.index--;
    }
  }

  private opacity(): void {
    this.renderer.removeClass(this.img.nativeElement, 'opacity-effect-after');
    this.renderer.addClass(this.img.nativeElement, 'opacity-effect-before');
    setTimeout(() => {
      this.renderer.removeClass(this.img.nativeElement, 'opacity-effect-before');
      this.renderer.addClass(this.img.nativeElement, 'opacity-effect-after');
    }, 350);
  }

  public actionClose(): void {
    this._actionModal(false);
    this.renderer.removeClass(this.img.nativeElement, 'opacity-effect');
  }

}
