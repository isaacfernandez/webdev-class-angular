import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,
              private service: UserServiceClient) {
  }

  username;
  password;
  cPassword;
  errorMessage;

  register(username, password, cPassword) {
    if (password === cPassword) {
      this.service
        .createUser(username, password)
        .then((response) => {
          if (response.status !== 404) {
            return response.blob();
          } else {
            alert('Error, server is down ');
          }
        }).then(blob => {
          if (blob.size > 0) {
            this.router.navigate(['profile']);
          } else {
            this.errorMessage = "Username already taken";
          }
      });
    }
    this.errorMessage = "passwords don't match";
  }

  ngOnInit() {
  }

}
