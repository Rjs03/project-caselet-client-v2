import { Injectable } from '@angular/core';
import { AdalService } from 'adal-angular4';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private adalService: AdalService) { }

  authInit(config) {
    // Initiate Adal auth with required config
    this.adalService.init(config);
  }

  logOut() {
    this.adalService.logOut();
  }

  login() {
    // Check if the user is authenticated. If not, call the login() method
    this.adalService.handleWindowCallback();
    if (!this.adalService.userInfo.authenticated) {
      this.adalService.login();
    }
    // end point for graph api is 00000002-0000-0000-c000-000000000000
    this.adalService.acquireToken('00000002-0000-0000-c000-000000000000').subscribe(response => {
      // console.log(response)
    });
    return true;
  }


  refreshToken() {
    // console.log('Function called');
    this.adalService.acquireToken('d5324e3c-3c47-4053-b30c-08d5ca192eb9').subscribe((response) => {
      // console.log(response);
    });
    this.adalService.acquireToken('00000002-0000-0000-c000-000000000000').subscribe(response => {
            // console.log(response)
    });
  }

  getUserInfo() {
    // returns profile and user name as observables
    return this.adalService.getUser();
  }
}
