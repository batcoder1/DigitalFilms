import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

export class MoviesServicesStub {

  constructor() { }

  getMovies(): Observable<HttpResponse<any>> {
    return of(new HttpResponse({
      body: FAKE_MOVIES
    }));
  }
}
  const FAKE_MOVIES =  {
    movies: [
        {
          'poster_path': '/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg',
          'backdrop_path': '/tcheoA2nPATCm2vvXw2hVQoaEFD.jpg',
          'overview': 'In a small town in Maine, se of a clown called Pennywise.',
          'id': 346364,
          'original_title': 'It'
        }
      ]
    };
