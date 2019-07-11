import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpBackend } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private httpClient: HttpClient;
  graphUrl: any;
  constructor(handler: HttpBackend) {
    this.httpClient = new HttpClient(handler);
    this.graphUrl = 'https://graph.windows.net/mindtree.com/users';
  }

  getUserData(value) {
    const headerdata = 'Bearer ' + sessionStorage.getItem('adal.access.token.key00000002-0000-0000-c000-000000000000');
    const headers = new HttpHeaders({
      'Authorization': headerdata
    });
    // tslint:disable-next-line:quotemark
    // const url = "https://graph.microsoft.com/v1.0/users?$filter=(startswith(displayName,'" + value + "')" +
    // tslint:disable-next-line:quotemark
    // "or+startswith(userPrincipalName,'" + value + "'))&$top=4";
    const filter =
      'startswith(displayName,' +
      "'" +
      value +
      "'" +
      ')or startswith(userPrincipalName,' +
      "'" +
      value +
      "'" +
      ')&$top=4';
    const Url = this.graphUrl + '?api-version=1.6&$filter=' + filter;
    return this.httpClient.get<any>(Url, { headers });
  }


  getUserName(value) {
    const headerdata = 'Bearer ' + sessionStorage.getItem('adal.access.token.key00000002-0000-0000-c000-000000000000');
    const headers = new HttpHeaders({
      'Authorization': headerdata
    });
    const filter =
    'startswith(userPrincipalName,' +
    "'" +
    value +
    "'" +
    ')&$top=1';
    const Url =
    this.graphUrl + '?api-version=1.6&$filter=' + filter;
    return this.httpClient.get<any>(Url, { headers });
  }

  getUserImage(value) {
    const headerdata = 'Bearer ' + sessionStorage.getItem('adal.access.token.key00000002-0000-0000-c000-000000000000');
    const options = {
      'Authorization': headerdata
    };
    const headers = new HttpHeaders(options);
    const Url =
      this.graphUrl +
      '/' +
      value +
      '@mindtree.com/thumbnailPhoto?api-version=1.6';
    return this.httpClient.get(Url, { headers, responseType: 'blob' });
  }
}
