import { async, ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AppModule } from '../app.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { MoviesService } from '../movies/movies.service';
import { Http } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { TOKEN } from '../utils/constantes';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,

      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {provide: APP_BASE_HREF, useValue : '/' }
      ],

    })
    .compileComponents();

  }));

  beforeEach( () => {
    localStorage.setItem('token', TOKEN);
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );
  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
