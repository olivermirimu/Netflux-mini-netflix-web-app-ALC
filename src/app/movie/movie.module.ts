import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MovieComponent } from './movie.component';
import { GenreComponent } from './genre/genre.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'movie/:title', component: MovieComponent },
      { path: 'movie', component: MovieComponent },
      { path: 'movie/:name/watch', component: MovieComponent },
      { path: 'movies/genre/:genre', component: GenreComponent }
    ])
  ]
})
export class MovieModule { }
