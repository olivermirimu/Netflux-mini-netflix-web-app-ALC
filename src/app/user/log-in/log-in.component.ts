import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'netflux-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  constructor(private router: Router, private userService: UserService) { }
  ngOnInit() {
  }
  log = {
    email: null,
    password: null
  };

  logIn() {
    this.userService.logInUser(this.log.email, this.log.password);

  }

  onSubmit(logForm: NgForm) {
    this.logIn();
    this.userService.isAuthenticated ? this.router.navigate(['/home']) : alert('Invalid user');
  }
}
