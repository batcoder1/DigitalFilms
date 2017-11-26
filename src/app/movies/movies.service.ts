import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Movie, LoginResponse, LoginRequest } from './movie';
import { AuthHttp } from 'angular2-jwt';

import { environment } from '../../environments/environment';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpResponse } from '@angular/common/http';

import { map } from 'rxjs/operators/map';
import { Observable } from 'rxjs/Observable';
import { element } from 'protractor';
import { CONFIGURATION, BASE_URL, MOVIES, USER, FAVORITES, LOGIN, MOVIES_SEARCH } from '../utils/constantes';
import { Subscriber } from 'rxjs/Subscriber';

@Injectable()
export class MoviesService {
  movies: Movie[] = [];
  constructor(private http: Http, private authHttp: AuthHttp) { }

  signup(username: string, password: string): Observable<any> {
    return this.http.post(BASE_URL + USER, { username: username, password: password });
  }

  getMovies(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new Headers({ 'Authorization': 'Bearer ' + token });
    const options = new RequestOptions({ headers: headers });
    return this.authHttp.get(BASE_URL + MOVIES, options);
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(BASE_URL + LOGIN, { username: username, password: password });
  }

  getConfigurations(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new Headers({ 'Authorization': 'Bearer ' + token });
    const options = new RequestOptions({ headers: headers });
    return this.authHttp.get(BASE_URL + CONFIGURATION, options);
  }

  addFavoriteMovieToUser(id_movie: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new Headers({ 'Authorization': 'Bearer ' + token });
    const options = new RequestOptions({ headers: headers });
    return this.authHttp.post(BASE_URL + FAVORITES, { movieDBId: id_movie }, options);
  }

  getFavoritesMoviesOfUSer(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new Headers({ 'Authorization': 'Bearer ' + token });
    const options = new RequestOptions({ headers: headers });
    return this.authHttp.get(BASE_URL + FAVORITES, options);
  }
  searchByTitle(title: string): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new Headers({ 'Authorization': 'Bearer ' + token, 'name': title }, );
    const options = new RequestOptions({ headers: headers });
    return this.authHttp.get(BASE_URL + MOVIES_SEARCH, options);

  }

  filterByMovieTitle(title: string, movies: Movie[]): Observable<Movie[]> {
    const movies$: Observable<Movie[]> = Observable.create((observer: Subscriber<any>) => {
      observer.next(movies);
      observer.complete();
    });
    return movies$.pipe(
      map(elems => elems.filter(elem => elem.original_title.toUpperCase().search(title.toUpperCase()) > 0))
    );
  }
  setMovies( movies: Movie[]) {
    this.movies = movies;
}

}


