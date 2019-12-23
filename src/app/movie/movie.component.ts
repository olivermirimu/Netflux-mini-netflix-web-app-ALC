import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from './movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'netflux-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  movieTitle = this.movieService.getMovie(this.route.snapshot.params['title']);

  ngOnInit() {
  }
  getMovies() {
    return this.moviesList;
  }
  
  // hard codded 
  moviesList = this.movieService.getMovies();
}
