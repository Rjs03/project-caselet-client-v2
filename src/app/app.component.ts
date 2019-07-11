import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { PreloaderService } from './services/preloader.service';
import { adalConfig } from './config/adalConfiguration';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'project-stories-client-side-v2';
  userData: any;
  loggedIn = false;

  constructor(
    private preloaderService: PreloaderService,
    private login: AuthService,
    private router: Router
  ) {
    this.login.authInit({
      tenant: adalConfig.tenantId,
      clientId: adalConfig.clientId,
      redirectUri: adalConfig.redirectUri + this.router.url,
      postLogoutRedirectUri: adalConfig.postLogoutRedirectUri + this.router.url,
      navigateToLoginResquestUrl: adalConfig.navigateToLoginResquestUrl,
      endpoints: adalConfig.endpoints
      });
    this.login.login();
    this.preloaderService.login().subscribe((response: any) => {
      this.userData = response.data.user;
      this.preloaderService.setUserDetails(this.userData);
      this.loggedIn = true;
      this.userInfo();
    });
  }

  refreshToken() {
    this.login.refreshToken();
  }

  userInfo() {
    const time = (sessionStorage.getItem('adal.expiration.keyd5324e3c-3c47-4053-b30c-08d5ca192eb9'));
    const numberTime = Number(time) * 1000;
    const currentTime = Date.now();
    const diff = numberTime - currentTime;
    const timeout = diff - 3490000;
    setTimeout(this.refreshToken.bind(this), timeout);
  }

}
