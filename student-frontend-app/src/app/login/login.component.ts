import {Component, OnInit} from '@angular/core';
import {Route, Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
              private service: UserServiceClient) {
  }

  username;
  password;
  errorMessage

  login(username, password) {
    console.log([username, password]);
    this.service
      .login(username, password)
      .then((response) => {
        if (response.status === 404) {
          this.errorMessage = "Server error, maybe its down?";
        }
        else {
          return response.blob()}})
      .then( (blob) => {
          if (blob.size > 0) {
            this.router.navigate(['profile']);
          } else {
            this.errorMessage = "Username/Password not found.";
          }
        })
  }

    ngOnInit()
    {
    }

  }
