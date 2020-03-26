import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';
import { MovieService } from 'src/app/movie/movie.service';
import { MovieInterface } from 'src/app/movie/movieInterface';
import { UserInterface } from 'src/app/user/userInterface';


@Component({
  selector: 'netflux-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  searchTerm: string;
  foundMovies: MovieInterface[];
  list: MovieInterface[];
  genre: string;
  genres: string[] = ['Action', 'Thriller', 'Drama', 'Comedy', 'Sci-Fi', 'Documentary'];
  loggedInUser: UserInterface = this.userService.loggedInUser;
  isAuthenticated: boolean = this.userService.isAuthenticated;
  constructor(private router: Router, private userService: UserService, private movieService: MovieService) {
    this.movieService.getGenre(this.genre).subscribe(movies => {
      this.list = movies;
    }, err => console.error(err));
  }

  searchMovie(searchTerm: string) {
    this.movieService.searchMovies(searchTerm).subscribe(movies => {
      this.foundMovies = movies;
      console.log(this.foundMovies);
    });
  }
  selectGenre(term) {
    this.genre = term;
    console.log(this.genre);
  }

  ngOnInit() {
  }

  logOut() {
    this.router.navigateByUrl('/welcome');
    this.userService.isAuthenticated = false;
  }

}
