import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MovieComponent } from './movie.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'movie/:title', component: MovieComponent },
      { path: 'movie', component: MovieComponent },
      { path: 'movie/:name/watch', component: MovieComponent }
    ])
  ]
})
export class MovieModule { }
