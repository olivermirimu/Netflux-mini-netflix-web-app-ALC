import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BrowseComponent } from './browse/browse.component';


@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'welcome', component: WelcomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'browse', component: BrowseComponent },
    { path: 'browse/:category', component: BrowseComponent },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },
    //lazy loading below not functional
    { path: 'movie', loadChildren: './movie/movie.module#MovieModule' },
    { path: 'user', loadChildren: './user/user.module#UserModule' }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
