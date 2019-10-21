import { Component, OnInit } from '@angular/core';
import { UserInterface } from '../userInterface';
import { UserService } from '../user.service';

@Component({
  selector: 'netflux-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService) { }
  currentUser: UserInterface = this.userService.getUser('billy@x.com');

  saveChanges() {
    console.log('changes saved');
  }
  makeChanges: boolean = false;
  
  editProfile(){
    return this.makeChanges = true;
  }
  //update to validate against new password
  confirmPassword(confirmField) {
    this.currentUser.password === this.currentUser.confirmPassword ? confirmField.invalid = true : confirmField.invalid = false;
  }
  ngOnInit() {
  }

}
