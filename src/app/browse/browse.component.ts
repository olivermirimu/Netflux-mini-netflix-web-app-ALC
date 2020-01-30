import { Component, OnInit, Output, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../movie/movie.service';
import { Observable, Timestamp } from 'rxjs';
import { MovieInterface } from '../movie/movieInterface';

@Component({
  selector: 'netflux-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  list;
  isSelected: string;
  constructor(private movieService: MovieService, private route: ActivatedRoute, private router: Router) {
    this.list = this.movieService.getMovies();
  }
  getDetails(title) {
    this.isSelected = title;
    console.log(this.isSelected);
    this.router.navigate(['/movie', this.isSelected]);
  }

  // @Input () filteredy: string;
  ngOnInit(): void {
    // this.list = this.movieService.getMovies(+this.route.snapshot.paramMap.get('id'));
    // const title = +this.route.snapshot.paramMap.get('id');
  }
}

