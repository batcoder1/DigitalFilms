import { async, ComponentFixture, TestBed, tick, fakeAsync, inject, discardPeriodicTasks, getTestBed } from '@angular/core/testing';

import { MovieComponent } from './movie.component';
import { AppModule } from '../../app.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { MoviesService } from '../movies.service';
import { Subscriber } from 'rxjs/Subscriber';
import { Movie, LoginResponse } from '../movie';
import { serializePath } from '@angular/router/src/url_tree';
import { AsyncPipe } from '@angular/common/src/pipes/async_pipe';
import { MOVIESSTUB, TOKEN } from '../../utils/constantes';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { HttpClientModule } from '@angular/common/http';



export class MoviesServiceMock {
  getMovies(): Observable<any> {
    return Observable.of(MOVIESSTUB);
  }
}


describe('MovieComponent', () => {
  let component: MovieComponent;
  let fixture: ComponentFixture<MovieComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [
        AppModule,
        HttpClientModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
      ],

    })
      .compileComponents();
  }));
  beforeEach( () => {
    localStorage.setItem('token', TOKEN);
    fixture = TestBed.createComponent(MovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should set users', async (() => {
    component.getMovies();
    expect(component.movies).not.toEqual(null);
  }));
});
