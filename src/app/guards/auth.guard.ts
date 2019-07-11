import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { adalConfig } from '../config/adalConfiguration';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.authService.authInit({
        tenant: adalConfig.tenantId,
        clientId: adalConfig.clientId,
        redirectUri: adalConfig.redirectUri,
        postLogoutRedirectUri: adalConfig.postLogoutRedirectUri,
        navigateToLoginResquestUrl: adalConfig.navigateToLoginResquestUrl,
        endpoints: adalConfig.endpoints
      });
    return true;
  }
}
