import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { MovieService } from 'src/app/movie/movie.service';
import { MovieInterface } from 'src/app/movie/movieInterface';
import { UserInterface } from '../userInterface';
import { isObject, isArray } from 'util';

@Component({
  selector: 'netflux-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  list: MovieInterface[] = [];
  titles: string[] = [];

  constructor(private userService: UserService, private movieService: MovieService) { }
  // change user reffernce to * this.userService.loggedInUser.favourites;
  getFavourites() {
    this.userService.getUser(this.userService.loggedInUser.email).subscribe((user: UserInterface) => {
      this.titles = user[0].favourites;
    }, err => console.error(err),
      () => { this.fetchMovies(); });
  }

  fetchMovies() {
    for (let title of this.titles) {
      this.movieService.getMovie(title).subscribe((movie: MovieInterface) => {
        if (movie !== null) {
          this.list = this.list.concat(movie);
        } else {
          console.log(`it is lonely in here`);
        }
      }, err => console.error(err));
    }
  }
  getMovieDetails(title) {
    this.movieService.getDetails(title);
  }

  ngOnInit() {
    this.getFavourites();
  }
}
