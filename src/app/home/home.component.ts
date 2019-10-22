import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie/movie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'netflux-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  list: any[];
  movieTitle: any;
  isSelected: any;
  constructor(private movieService: MovieService, private route: ActivatedRoute, private router: Router) {
    this.list = this.movieService.getMovies();
    // this.route.snapshot.params
  }

  slider = {
    slide1: 'assets/farFromHomeC1.jpg',
    slide2: 'assets/infinityWarC.jpg',
    slide3: 'assets/shazamC.jpg'
  };
  getDetails(title) {
    this.isSelected = title;
    console.log(this.isSelected);
    this.router.navigate(['/movie', this.isSelected]);
  }
  ngOnInit() {
    // this.movieTitle = this.movieService.getMovie(1);
  }
}
