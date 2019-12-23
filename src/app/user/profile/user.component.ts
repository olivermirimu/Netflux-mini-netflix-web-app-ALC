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
  constructor(private userService: UserService) { }
  currentUser: UserInterface = this.userService.getUser('billy@x.com');
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
