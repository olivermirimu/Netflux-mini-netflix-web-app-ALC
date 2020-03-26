import { Injectable, EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MovieInterface } from './movieInterface';
import * as movieList from './../../api/movies';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

const url = '/api/movies';
@Injectable({
  providedIn: 'root'
})

export class MovieService {
  constructor(private http: HttpClient, private router: Router) { }

  getMovies(): Observable<MovieInterface[]> {
    return this.http.get<MovieInterface[]>(url)
      .pipe(catchError(this.handleErrors<MovieInterface[]>('getMovies', [])));
  }
  // TODO: change api calls toLocalLowercase: compartibility issues
  getMovie(choice: any): Observable<MovieInterface> {
    return this.http.get<MovieInterface>(`/api/movie/${choice}`);
  }
  // get genres
  getGenre(genre) {
    return this.http.get<MovieInterface[]>(`/api/genre/${genre}`);
  }

  getDetails(title) {
    this.router.navigate(['/movie', title]);
  }
  searchMovies(searchTerm: string) {
    const term = searchTerm.toLocaleLowerCase();
    let results: MovieInterface[] = [];

    let matchingMovies = movieList.filter((movie: MovieInterface) =>
      movie.title.toLocaleLowerCase().indexOf(term) > -1);

    matchingMovies = matchingMovies.map((movie: any) => {
      movie.title = movie.title;
      return movie;
    });
    results = results.concat(matchingMovies);
    const emitter: EventEmitter<any> = new EventEmitter(true);
    setTimeout(() => {
      emitter.emit(results);
    }, 100);
    return emitter;
  }

  // Error handling
  private handleErrors<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}

