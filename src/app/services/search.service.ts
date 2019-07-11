import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  // let searchResult = new BehaviorSubject(null);

  constructor(private httpClient: HttpClient) { }

  // setSearchResult(data: any) {
  //   searchResult.next(data);
  // }

 search(searchValue, pageNumber, limit) {
  //  const queryString = '?search=' + searchValue + '&pageNo=' + pageNumber + '&limit=' + limit;
   const queryString = '?search=' + searchValue;
  return this.httpClient.get(environment.serverUrl + environment.caselet + environment.search + queryString);
  }
}
