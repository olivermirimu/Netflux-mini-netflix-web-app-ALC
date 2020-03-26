import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieInterface } from '../movie/movieInterface';
import { Observable } from 'rxjs';

@Component({
  selector: 'netflux-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  list: MovieInterface[];
  movieTitle: any;
  isSelected: any;
  constructor(private movieService: MovieService, private route: ActivatedRoute, private router: Router) {
    this.movieService.getMovies().subscribe(movies => {
      this.list = movies;
    }, err => console.error(err));
  }

  slider = {
    slide1: 'assets/farFromHomeC1.jpg',
    slide2: 'assets/infinityWarC.jpg',
    slide3: 'assets/shazamC.jpg'
  };
  getMovieDetails(title) {
    this.movieService.getDetails(title);
  }
  ngOnInit() {
  }
}
