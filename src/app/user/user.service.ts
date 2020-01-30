import { Injectable } from '@angular/core';
import { UserInterface } from './userInterface';
import * as USERS from './../../api/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser: UserInterface;
  isAuthenticated: boolean;
  loggedInUser: string;
  userName: string;
  constructor() { }
  getUser(email: string) {
    return USERS.find(user => user.email === email);
  }

  logInUser(email: string, pass: string) {
    // change to show invalid email or mpassword and allocate object to
    USERS.find(user => user.email === email) ? this.currentUser = USERS.find(user => user.email === email) : this.currentUser = null;
    (this.currentUser.password === pass) ? console.log(`Welcome ${this.currentUser.firstName}`) : this.isAuthenticated = false;
    (user => user.email === email) && (this.currentUser.password === pass) ? this.isAuthenticated = true : this.isAuthenticated = false;
    if ((user => user.email === email) && (this.currentUser.password === pass)) {
      sessionStorage.setItem(this.loggedInUser, this.currentUser.firstName);
      // sessionStorage.setItem(this.loggedInUser, this.currentUser.firstName)
      this.loggedInUser = sessionStorage.getItem(this.loggedInUser);
      this.loggedInUser ? this.isAuthenticated = true : this.isAuthenticated = false;
    }
  }

  // the below doesn't work thus user isn't saved
  saveUser(user: UserInterface) {
    USERS.push(user);
  }

}


