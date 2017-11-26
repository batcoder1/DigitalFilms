import { NgModule } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';

import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
    return new AuthHttp(new AuthConfig({
          headerName: 'Authorization',
           headerPrefix: 'bearer',
           tokenName: 'token',
           noJwtError: true,
          tokenGetter: (() => sessionStorage.getItem('token'))
      }), http, options);
  }

@NgModule({
  providers: [
    
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ]
})
export class AuthModule {}
