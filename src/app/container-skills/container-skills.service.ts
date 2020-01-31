import { Injectable } from '@angular/core';
import { ApiService } from '@shared/api/api.service';
import { endpoint } from 'src/environments/environment';
import { Observable, } from 'rxjs';
import { map } from 'rxjs/operators';
import { ResultSkills, Skills } from '@shared/models/skills';


@Injectable({
  providedIn: 'root'
})
export class ContainerSkillsService {

  constructor(private apiService: ApiService) { }

  public dataTechnologies(): Observable<Skills[]> {
    return this.apiService.get(endpoint.skills).pipe(map((resp: ResultSkills) => resp.result));
  }
}
