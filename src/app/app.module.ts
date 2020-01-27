import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/profile/user.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './shared/footer/footer.component';
import { BrowseComponent } from './browse/browse.component';
import { NavComponent } from './shared/nav/nav.component';
import { LogInComponent } from './user/log-in/log-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { MovieComponent } from './movie/movie.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserModule } from './user/user.module';
import { MovieModule } from './movie/movie.module';
import { MovieService } from './movie/movie.service';
import { FavouritesComponent } from './user/favourites/favourites.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    FooterComponent,
    BrowseComponent,
    NavComponent,
    LogInComponent,
    SignUpComponent,
    MovieComponent,
    PageNotFoundComponent,
    WelcomeComponent,
    FavouritesComponent
  ],
  imports: [
    BrowserModule,
    UserModule,
    MovieModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

