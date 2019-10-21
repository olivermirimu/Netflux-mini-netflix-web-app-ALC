import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
//import (AuthService) from './auth/service';

@Component({
  selector: 'netflux-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  //private authService: AuthService
  constructor(private router: Router, private userService: UserService) { }
  ngOnInit() {
  }
  log = {
    email: null,
    password: null
  }

  logIn() {
    this.userService.logInUser(this.log.email, this.log.password);

  }

  onSubmit(logForm: NgForm) {
    this.logIn();
    //console.log(this.log);
    this.userService.isAuthenticated ? this.router.navigate(['/home']) : console.log('invalid user') ;
  }
}
