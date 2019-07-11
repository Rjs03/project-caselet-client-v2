import { HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    authRequest;

    constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const accessToken = sessionStorage.getItem('adal.access.token.keyd5324e3c-3c47-4053-b30c-08d5ca192eb9');
        if (accessToken) {
              this.authRequest = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + accessToken),
            });
            return next.handle(this.authRequest);
        } else {
            this.authRequest = req.clone();
            return next.handle(this.authRequest);
        }
    }
}
