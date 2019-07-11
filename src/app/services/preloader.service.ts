import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PreloaderService {

  user: any;

  constructor(private httpClient: HttpClient) { }

  login() {
    return this.httpClient.get(environment.serverUrl + environment.login);
  }

  getUserDetails() {
    return this.user;
  }

  setUserDetails(user) {
    this.user = user;
  }
}
