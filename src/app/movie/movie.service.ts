import { Injectable, EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';
import { stringify } from '@angular/compiler/src/util';
import { MovieInterface } from './movieInterface';
import { MovieComponent } from './movie.component';
import * as movieList from './../../api/movies';
import { HttpClient } from '@angular/common/http';

const url = './../../api/movies';
@Injectable({
  providedIn: 'root'
})

export class MovieService {
  constructor(private http: HttpClient) { }

  getMovies() {
    // return this.http.get(url);
    return movieList;
  }
  // get genres
  getComedy() {
    return movieList.find(comedy => {
      return comedy.genre === 'comedy';
    });
  }
  getDrama() {
    return movieList.find(drama => {
      return drama.genre === 'drama';
    });
  }
  getAction() {
    return movieList.find(action => {
      return action.genre === 'action';
    });
  }

  getMovie(choice: any) {
    return movieList.find(movie => movie.title === choice);
  }
  searchMovies(searchTerm: string) {
    // let term = searchTerm.toLocaleLowerCase();
    // let results: MovieInterface[] = [];

    // MOVIES.forEach( movie => {
    //   let matchingMovies = movie.title.toLocaleLowerCase().indexOf(term) > -1;
    //   matchingMovies = matchingMovies.map( (event: any) => {
    //     event.movieTitle = movie.title;
    //     return movie;
    //   })
    // })
  }
}

