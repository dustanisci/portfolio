import { Injectable } from '@angular/core';
import { ApiService } from '@shared/api/api.service';
import { endpoint } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContainerSkillsService {

  constructor(private apiService: ApiService) { }

  public dataTechnologies(): Observable<object> {
    return this.apiService.get(endpoint.technologies);     
  }
}
