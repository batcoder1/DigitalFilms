import { Component, OnInit, SimpleChanges } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { SimpleChange } from '@angular/core/src/change_detection/change_detection_util';
import { MoviesService } from '../movies/movies.service';
import { Movie } from '../movies/movie';
import { prototype } from 'stream';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  favorites: Movie[] = [];
  base_url = '';
  poster_size = '';
  username = '';
  lineChartData = [
    { data: [8, 10, 3, 6, 2, 3, 8, 9, 8, 4, 10, 8], label: 'Watched Movies' },
    { data: [3, 4, 5, 6, 1, 3, 4, 3, 3, 9, 10, 2], label: 'Watched Movies' }
  ];
  lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];
  lineChartOptions = {
    responsive: true
  };

  lineChartLegend = false;
  lineChartType = 'line';
   
  radarChartLabels: string[] = ['Accion', 'Comedia', 'Drama', 'Terror', 'Sfy', 'Suspense'];
  radarChartData: any = [
    { data: [18, 12, 8, 4, 21, 5], label: '2016' },
    { data: [16, 21, 12, 12, 24, 7], label: '2017' }
  ];
  radarChartType = 'radar';
  option = {
    legend: {position: 'right' }
  };
  constructor(private service: MoviesService) { }

  ngOnInit() {
    this.username = localStorage.getItem('username');
    this.getConfiguration();
    this.getFavoritesMovies();
    this.randomize();
  }
  getConfiguration() {
    this.service.getConfigurations().subscribe(
      resp => {
        const body = JSON.parse(resp._body);
        const images = body.images;
        this.base_url = images.secure_base_url;
        this.poster_size = images.poster_sizes[2];
      }
    );
  }
  getFavoritesMovies() {
    this.service.getFavoritesMoviesOfUSer().subscribe(
      resp => {
        const body = JSON.parse(resp._body);
        this.favorites = body.movies;
      });
  }

  randomize(): void {
    const _lineChartData = [];
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = { data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label };
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 10) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }
}
