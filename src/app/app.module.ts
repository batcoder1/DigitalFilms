import {Routes, RouterModule, Router} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AuthHttp, AuthConfig, AUTH_PROVIDERS } from 'angular2-jwt';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { MovieComponent } from './movies/movie/movie.component';
import { MoviesService } from './movies/movies.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Http, RequestOptions } from '@angular/http';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { HttpModule } from '@angular/http';
import { AuthModule, authHttpServiceFactory } from './auth.module';
import { ChartsModule } from 'ng2-charts';


const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { stateName: 'home' } ,  canActivate: [AuthGuard] },
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'movies', component: MovieComponent,  canActivate: [AuthGuard] },

];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    FormsModule,
    AuthModule,
    ChartsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide: AuthService, useClass: AuthService, deps: []},
    { provide: AuthGuard, useClass: AuthGuard, deps: [AuthService, Router]},
    { provide: MoviesService, useClass: MoviesService, deps: [Http, AuthHttp]},
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
