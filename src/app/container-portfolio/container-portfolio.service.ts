import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '@shared/api/api.service';
import { endpoint } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContainerPortfolioService {

  constructor(private apiService: ApiService) { }

  public dataPortfolio(): Observable<object> {
    return this.apiService.get(endpoint.portfolio);     
  }
}
