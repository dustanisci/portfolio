import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private headers: HttpHeaders = new HttpHeaders().append('Content-Type', 'application/json');
  private request: HttpParams = new HttpParams();

  constructor(private http: HttpClient) { }

  public get(url, request?): Observable<Object> {
    if (request) {
      Object.keys(request).map(key => {
        this.request.append(key, request[key]);
      });
    }
    return this.http.get(url, { headers: this.headers, params: this.request });
  }
}