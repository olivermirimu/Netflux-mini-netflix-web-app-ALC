import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';
import { MovieInterface } from '../movieInterface';

@Component({
  selector: 'netflux-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {
  list: MovieInterface[];
  constructor(private http: HttpClient, private movieService: MovieService, private route: ActivatedRoute) { }

  getMovieDetails(title) {
    this.movieService.getDetails(title);
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const genre = params.get('genre');
      this.movieService.getGenre(genre).subscribe(movies => {
        this.list = movies;
      });
    });
  }

}
