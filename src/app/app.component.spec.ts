import { TestBed, async } from '@angular/core/testing';
import {AppComponent} from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MoviesService } from './movies/movies.service';
import { AuthHttp } from 'angular2-jwt';
import { Http, RequestOptions } from '@angular/http';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MovieComponent } from './movies/movie/movie.component';
import { Routes, RouterModule } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import { AuthModule } from './auth.module';
import { ChartsModule } from 'ng2-charts';

describe('AppComponent', () => {
  beforeEach(async(() => {
    const routes: Routes = [
      { path: 'home', component: HomeComponent, data: { stateName: 'home' } },
      { path: '', component: LoginComponent, data: { stateName: 'login' } },
      { path: 'signup', component: SignupComponent, data: { stateName: 'signup' } },
      { path: 'movies', component: MovieComponent, data: { stateName: 'movie' } },
 
     ];
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, LoginComponent, SignupComponent, MovieComponent, HomeComponent
      ],
      imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        ChartsModule,
        RouterModule.forRoot(routes)
      ],
      providers: [
        { provide: MoviesService, useClass: MoviesService, deps: [AuthHttp]},
        {provide: APP_BASE_HREF, useValue : '/' }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
