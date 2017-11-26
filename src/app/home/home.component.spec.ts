import {CUSTOM_ELEMENTS_SCHEMA, Inject} from '@angular/core';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppModule } from '../app.module';
import { APP_BASE_HREF } from '@angular/common';
import { TOKEN } from '../utils/constantes';
import { MoviesServicesStub } from '../movies/movies.service.stub';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
   
      imports: [
        AppModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {provide: APP_BASE_HREF, useValue : '/' }
      ],

 
    })
    .compileComponents();
  }));

  beforeEach(() => {
    localStorage.setItem('token', TOKEN);
    fixture = TestBed.createComponent(HomeComponent);
    
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
