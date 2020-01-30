import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { UserManager, User } from 'oidc-client';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userManager: UserManager;

  constructor(private httpClient: HttpClientModule) {
    const config = {
      authority: 'http://localhost:3500/',
      client_id: 'netflux-client',
      redirect: 'http://localhost:4200/',
      scope: 'openid projects-api',
      post_logout_redirect_url: 'https://localhost:4200/welcome'
    };
    this.userManager = new UserManager(config);
  }
  logIn(): Promise<any> {
    return this.userManager.signinRedirect();
  }
}
