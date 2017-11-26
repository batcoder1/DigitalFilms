import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { Movie } from '../movie';
import { MoviesService } from '../movies.service';
import { HttpResponse } from '@angular/common/http';
import { element } from 'protractor';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit, OnDestroy {
  movie$: Observable<Movie[]>;
  movies: Movie[];
  allMoviesWithFavorites: Movie[] = [];
  favorites: Movie[];
  originalMoviesWithFavorites: Movie[];
  subFavorites: Subscription;
  base_url: string;
  poster_size: string;

  constructor(private service: MoviesService) { }

  ngOnInit() {
    this.getConfiguration();
    this.getMovies();
    this.originalMoviesWithFavorites = this.allMoviesWithFavorites;
  }

  filter(title: string) {
    this.subFavorites = this.service.filterByMovieTitle(title, this.allMoviesWithFavorites)
      .subscribe(movie => {
        if (movie.length === 0 && title === '') {
          this.allMoviesWithFavorites = this.originalMoviesWithFavorites;
        } else {
          this.allMoviesWithFavorites = movie;
        }
      });
  }


  getConfiguration() {
    this.service.getConfigurations().subscribe(
      resp => {
        const body = JSON.parse(resp._body);
        const images = body.images;
        this.base_url = images.secure_base_url;
        this.poster_size = images.poster_sizes[3];
      }
    );
  }
  getMovies() {
    this.service.getMovies().subscribe(
      resp => {
        const body = JSON.parse(resp._body);
        this.movies = body.movies;
        this.getFavoritesMovies();
      }
    );
  }
  getFavoritesMovies() {
    this.service.getFavoritesMoviesOfUSer().subscribe(
      resp => {
        const body = JSON.parse(resp._body);
        this.favorites = body.movies;
        this.getionFavoritos();
      }
    );
  }
  getionFavoritos() {
    this.movies.forEach((movie: Movie) => {
      this.favorites.forEach(fav => {
        if (movie.id === fav.id) {
          movie.favorite = true;
        }
      });
      this.allMoviesWithFavorites = [...this.allMoviesWithFavorites, movie];
    });

  }
  addMovieToFavorites(movie: Movie) {

    this.service.addFavoriteMovieToUser(movie.id).subscribe();
    // marcamos esa movie como favorita y la sustituimos en el array allMoviesWithFavorites
    const index = this.allMoviesWithFavorites.indexOf(movie);
    if (index !== -1) {
      movie.favorite = true;
      this.allMoviesWithFavorites[index] = movie;
    }


  }
  ngOnDestroy() {
    if (this.subFavorites) {
      this.subFavorites.unsubscribe();
    }
  }
}
