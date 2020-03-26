import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from './movie.service';
import { ActivatedRoute } from '@angular/router';
import { MovieInterface } from './movieInterface';

@Component({
  selector: 'netflux-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movieTitle: MovieInterface;
  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  // TODO: fix fetch error
  ngOnInit() {
    this.movieService.getMovie(this.route.snapshot.paramMap.get('title')).subscribe((movie: MovieInterface) => {
      this.movieTitle = movie[0];
    }, err => console.log(err));
  }
  getMovies() {
    return this.movieService.getMovies();
  }
}
