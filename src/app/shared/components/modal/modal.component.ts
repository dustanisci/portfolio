import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Portfolio } from '@shared/models/portfolio';
import { TranslateService } from '@ngx-translate/core';

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

  @ViewChild('img')
  public img: ElementRef;

  public index = 0;

  constructor(
    private renderer: Renderer2,
    private translate: TranslateService) {
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
    if (this.project.galleries[auxIndex].urlGallery.length) {
      this.index++;
    }
  }

  public previousImage(): void {
    const auxIndex: number = this.index - 1;
    if (this.project.galleries[auxIndex].urlGallery.length) {
      this.index--;
    }
  }

  public actionClose(): void {
    this._actionModal(false);
    this.renderer.removeClass(this.img.nativeElement, 'opacity-effect');
  }

}
