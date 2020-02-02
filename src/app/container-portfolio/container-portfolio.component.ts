import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, Renderer2, ChangeDetectorRef } from '@angular/core';
import { ContainerPortfolioService } from './container-portfolio.service';
import { Portfolio } from '@shared/models/portfolio';

@Component({
  selector: 'app-container-portfolio',
  templateUrl: './container-portfolio.component.html',
  styleUrls: ['./container-portfolio.component.scss']
})
export class ContainerPortfolioComponent implements OnInit {

  public portfolio: Portfolio[] = [];
  public index: number;
  public portfolioTwoItems: Portfolio[] = [];
  public loaderPortfolio = false;

  @Output()
  public loader: EventEmitter<void> = new EventEmitter<void>();

  @ViewChild('list', { static: false })
  public list: ElementRef;

  constructor(
    private renderer: Renderer2,
    private ref: ChangeDetectorRef,
    private portfolioService: ContainerPortfolioService) { }

  ngOnInit() {
    this.dataPortfolio();
  }

  private dataPortfolio(): void {
    this.portfolioService.dataPortfolio().subscribe((portfolio: Portfolio[]) => {
      this.portfolio = portfolio.reverse();
      this.index = Math.round((this.portfolio.length / 2));
      this.setItemsByIndex(0);
      this.loader.emit();
    }, () => this.loader);
  }

  // This is temporary until the service is created
  private setItemsByIndex(index: number) {
    this.loaderPortfolio = true;
    setTimeout(() => {
      this.portfolioTwoItems[0] = this.portfolio[index * 2];
      this.portfolioTwoItems[1] = this.portfolio[(index * 2) + 1];
      this.loaderPortfolio = false;
    }, 500);
  }

  private setClassActive(index: number) {

    for (const element of this.list.nativeElement.querySelectorAll('li')) {
      this.renderer.removeClass(element, 'active');
    }

    this.renderer.addClass(this.list.nativeElement.querySelector(`li:nth-of-type(${index})`), 'active');
    this.ref.markForCheck();
  }

}
