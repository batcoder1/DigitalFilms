import { TestBed, inject, async, fakeAsync, tick } from '@angular/core/testing';

import { MoviesService } from './movies.service';
import { filter } from 'rxjs/operators/filter';
import { AuthModule, authHttpServiceFactory } from '../auth.module';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser/src/browser';
import { AuthHttp } from 'angular2-jwt';
import { FormsModule } from '@angular/forms';
import { AppModule } from '../app.module';
import { APP_BASE_HREF } from '@angular/common';
import { Body } from '@angular/http/src/body';
import { Movie } from './movie';
import { Observable } from 'rxjs/Observable';
import { TOKEN, MOVIESSTUB } from '../utils/constantes';
import { Subscriber } from 'rxjs/Subscriber';


import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { MoviesServicesStub } from './movies.service.stub';

describe('MoviesService', () => {
  
  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        AppModule
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        { provide: MoviesService, useClass: MoviesServicesStub }
      ]
    });
    localStorage.setItem('token', TOKEN);
    
  });

  it('should be created', inject([MoviesService], (service: MoviesService) => {
    expect(service).toBeTruthy();
  }));

  it('should get movies from server', async(() => {
    const service: MoviesService = TestBed.get(MoviesService);
    service.getMovies().subscribe(
      response => {
        expect(response.status).toBe(200);
        expect(response.body).not.toBeNull();
        expect(response.body.movies[0].original_title).toEqual('It');
      }
    );
  }));

});

