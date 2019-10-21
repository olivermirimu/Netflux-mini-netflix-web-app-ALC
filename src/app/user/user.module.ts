import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserComponent } from './profile/user.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'profile', component: UserComponent},
      {path:'sign-up', component: SignUpComponent, canDeactivate: ['cancelSignUp']},
      {path:'log-in', component: LogInComponent}
    ])
  ],
  providers:[{provide:'cancelSignUp', useValue: checkDirtyState }]
})
export class UserModule { }

export function checkDirtyState(component: SignUpComponent ) {
  if(component.isDirty){
    return window.confirm('You have not completed sign up. The data shall be lost if you proceed!');
  } else { return true;}
}