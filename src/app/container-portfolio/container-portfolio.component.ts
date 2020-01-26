import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ContainerPortfolioService } from './container-portfolio.service';
import { Portfolio } from '@shared/models/portfolio';

@Component({
  selector: 'app-container-portfolio',
  templateUrl: './container-portfolio.component.html',
  styleUrls: ['./container-portfolio.component.scss']
})
export class ContainerPortfolioComponent implements OnInit {

  public portfolio: Portfolio[] = [];
  
  @Output()
  public loader:EventEmitter<void> =  new EventEmitter<void>();

  constructor(private portfolioService: ContainerPortfolioService) { }

  ngOnInit() {
    this.dataPortfolio();
  }

  private dataPortfolio():void{
    this.portfolioService.dataPortfolio().subscribe((portfolio: Portfolio[]) => {
      this.portfolio = portfolio;
      this.loader.emit();
    }, () => this.loader);
  }

}
