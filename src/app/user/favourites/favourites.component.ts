import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { MovieService } from 'src/app/movie/movie.service';
import { MovieInterface } from 'src/app/movie/movieInterface';

@Component({
  selector: 'netflux-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  list: MovieInterface[];
  movie: MovieInterface;

  constructor(private userService: UserService, private movieService: MovieService) { }
  //change user reffernce to * this.userService.loggedInUser.favourites;
  //user = this.userService.loggedInUser;
  titles: string[] = this.userService.getUser('billy@x.com').favourites;
  fetchMovies() {
    for (let i = 0; i < this.titles.length; i++) {
      this.movie = this.movieService.getMovie(this.titles[i]);
      //console.log(this.movie)
      //this.list.push(this.movie);
      //return this.list;
      console.log(this.list);
    }
    //console.log(this.fetchMovies);
    console.log(this.titles);
  }
  ngOnInit() {

  }

}
