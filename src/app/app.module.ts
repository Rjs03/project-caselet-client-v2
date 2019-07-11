import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AdalService, AdalGuard} from 'adal-angular4';

// importing defined modules
import { CoreModule } from './modules/core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdalInterceptor } from 'adal-angular4';
import { AuthInterceptor } from './interceptors/authInterceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InfiniteScrollModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AdalInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    AdalService, AdalGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
