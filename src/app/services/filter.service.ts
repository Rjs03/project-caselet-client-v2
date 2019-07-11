import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor(private httpClient: HttpClient) { }

  getfilters() {
    return this.httpClient.get(environment.serverUrl + environment.filter);
  }
}
