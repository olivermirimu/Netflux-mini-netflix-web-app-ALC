import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';
import { MovieService } from 'src/app/movie/movie.service';


@Component({
  selector: 'netflux-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  // filteredBy: string = "all";
  searchTerm: string;
  foundMovies: any; // movie list interface
  constructor(private router: Router, private userService: UserService, private movieService: MovieService) { }

  searchMovie(searchTerm: string) {
    // this.movieService.searchMovies(this.searchTerm).subscribe(
    //   movies => {
    //   this.foundMovies = movies;
    //     console.log(this.foundMovies);
    //   });
    console.log('ok searching');
  }
  ngOnInit() {
  }

  logOut() {
    this.router.navigateByUrl('/welcome');
    this.userService.isAuthenticated = false;
    console.log('I work!');
  }

}
