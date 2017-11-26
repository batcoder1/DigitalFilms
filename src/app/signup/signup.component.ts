import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies/movies.service';
import { LoginResponse } from '../movies/movie';
import { Router, ActivatedRoute } from '@angular/router';
import { JwtHelper } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  _password: string;
  _passwordConfirm: string;
  _username: string;
  _errorPassword = false;
  _respuesta= '';
  _error= '';
  constructor(private service: MoviesService,  private route: Router) { }


  ngOnInit() {
  }
  handleSignup() {
  if (this._password === this._passwordConfirm) {
    this._errorPassword = false;
    this.service.signup(this._username, this._password)
      .subscribe(
        resp => {
         this._respuesta = resp.message;
         this.route.navigate(['']);
       },
       error => this._error = error
      );
  }else {
    this._errorPassword = true;
    this._respuesta = 'Error, las constraseñas no son iguales';
  }


 }
}
