import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  constructor(private httpClient: HttpClient) { }

  getTags() {
    return this.httpClient.get(environment.serverUrl + environment.tags);
  }

  searchCaseletByTag(tagName) {
    const queryParameter = '?filter=tags_name eq \'' + tagName + '\'';
    return this.httpClient.get(environment.serverUrl + environment.caselet + environment.search + queryParameter);
  }
}
