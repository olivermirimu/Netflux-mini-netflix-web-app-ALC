import { Component, OnInit } from '@angular/core';
import { UserInterface } from '../userInterface';
import { UserService } from '../user.service';

@Component({
  selector: 'netflux-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  makeChanges = false;
  currentUser: UserInterface = {
    id: null,
    firstName: null,
    lastName: null,
    email: null,
    favourites: [],
    // subscription: null,
    // card: null,
    password: null,
    confirmPassword: null,
    tnC: null
  };
  constructor(private userService: UserService) {
    this.userService.getUser(this.userService.loggedInUser.email).subscribe((user: UserInterface) => {
      this.currentUser = user[0];
    }, (err: any) => console.warn(err));
  }
  // currentUser: UserInterface = this.userService.loggedInUser;

  saveChanges() {
    console.log('changes saved');
  }
  editProfile() {
    return this.makeChanges = true;
  }
  // update to validate against new password
  confirmPassword(confirmField) {
    this.currentUser.password === this.currentUser.confirmPassword ? confirmField.invalid = true : confirmField.invalid = false;
  }
  ngOnInit() {
    // console.log(this.userService.loggedInUser);
  }

}
