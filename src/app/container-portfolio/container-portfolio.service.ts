import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from '@shared/api/api.service';
import { endpoint } from 'src/environments/environment';
import { mockyPortfolio } from '@shared/mock/mock-portfolio';

@Injectable({
  providedIn: 'root'
})
export class ContainerPortfolioService {

  constructor(private apiService: ApiService) { }

  public dataPortfolio(): Observable<object> {
    return of(mockyPortfolio);
    // return this.apiService.get(endpoint.portfolio);
  }
}
