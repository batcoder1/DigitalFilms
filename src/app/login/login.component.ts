import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies/movies.service';
import { LoginResponse } from '../movies/movie';
import { Router, ActivatedRoute } from '@angular/router';
import { JwtHelper } from 'angular2-jwt';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  _username: string;
  _password: string;
  _respuesta = '';
  _jwtHelper: JwtHelper = new JwtHelper();
  constructor(private service: MoviesService,  private route: Router) { }

  ngOnInit() {
  }
  handleLogin() {
    this.service.login(this._username, this._password)
    .subscribe( response => {
      const data = response;
 
      const body = JSON.parse(response._body);
      localStorage.setItem('token', body.token);
      localStorage.setItem('username', this._username);
      this.route.navigate(['home']);
    }, error =>   {
      const body = JSON.parse(error._body);
      this._respuesta = body.message;
    }
  );
 }
}
