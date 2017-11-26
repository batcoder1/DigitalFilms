import { Component, OnInit } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import { AuthService } from '../auth.service';
import { AuthGuard } from '../auth-guard.service';
import { Router } from '@angular/router';
import { MoviesService } from '../movies/movies.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  verMasTarde = '../assets/ver-mas-tarde.svg';
  username: string;
  constructor( private auth: AuthService, private route: Router, private service: MoviesService ) { }

  ngOnInit() {
    this.username = localStorage.getItem('username');
  }
  logout() {
    localStorage.clear();
    this.route.navigate(['']);
    this.username  = '';
  }

}
