import { Component, OnInit } from '@angular/core';
import { UserInterface } from '../userInterface';
import { NgForm } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { UserService } from '../user.service';
// import { NgForm } from '@angular/forms';

@Component({
  selector: 'netflux-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  isDirty = true;
  userExists: boolean;
  constructor(private router: Router, private userService: UserService) { }
  userDetails: UserInterface = {
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

  ngOnInit() {
  }
  isActive() {
    this.userService.getUser(this.userDetails.email) ? console.log() : console.log(false);
  }
  // TODO: Clean up split to two functions
  verificationAndRegistration() {
    this.userService.getUser(this.userDetails.email).subscribe((response: UserInterface) => {
      if (response[0] === undefined || response[0].email !== this.userDetails.email) {
        this.userExists = false;
      } else if (response[0].email === this.userDetails.email) {
        alert(`Sorry! Another account with the email ${this.userDetails.email} already exists`);
        this.userExists = true;
      }
    }, err => { throw new Error(err); }, () => {
      if (!this.userExists) {
        this.registerUser();
      }
    });
    // this.isActive();
    // TODO:this.router.navigate(['/success']); //add activation redirect in future
  }

  registerUser() {
    this.userService.saveUser(this.userDetails).subscribe((savedDetails) => {
      alert(`${this.userDetails.firstName} you have registered successfully`);
      this.isActive();
      this.isDirty = false;
      this.userService.loggedInUser = this.userDetails;
      this.router.navigate(['/home']);
      console.log(this.userService.loggedInUser);
    });
  }

  confirmPassword(confirmField) {
    this.userDetails.password === this.userDetails.confirmPassword ? confirmField.invalid = true : confirmField.invalid = false;
  }
  cancelSignUp() {
  }

  onSubmit(form: NgForm) {
    this.verificationAndRegistration();
    // this.isActive ? console.log('email already exists') : this.registerUser();
    // console.log(this.userDetails);
  }

}
