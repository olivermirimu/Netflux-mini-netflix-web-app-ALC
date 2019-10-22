import { Injectable, EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';
import { stringify } from '@angular/compiler/src/util';
import { MovieInterface } from './movieInterface';
import { MovieComponent } from './movie.component';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor() { }

  getMovies() {
    return MOVIES;
  }
  // get genres
  getComedy() {
    return MOVIES.find(comedy => {
      return comedy.genre === 'comedy';
    });
  }
  getDrama() {
    return MOVIES.find(drama => {
      return drama.genre === 'drama';
    });
  }
  getAction() {
    return MOVIES.find(action => {
      return action.genre === 'action';
    });
  }

  getMovie(choice: any) {
    return MOVIES.find(movie => movie.title === choice);
  }
  searchMovies(searchTerm: string) {
    // let term = searchTerm.toLocaleLowerCase();
    // let results: MovieInterface[] = [];

    // MOVIES.forEach( movie => {
    //   let matchingMovies = movie.title.toLocaleLowerCase().indexOf(term) > -1;
    //   matchingMovies = matchingMovies.map( (event: any) => {
    //     event.movieTitle = movie.title;
    //     return movie;
    //   })
    // })
  }
}

const MOVIES = [
  {
    id: 1,
    title: 'Spiderman (into the spiderverse)',
    releaseYear: '2019',
    duration: '2.1h',
    rating: '7 / 10',
    genre: 'Action',
    director: '',
    writer: '',
    Actors: [],
    plot: '',
    awards: '',
    imageUrl: '/assets/intoTheSpiderverse.jpg',
    cover: '/assets/intoTheSpiderverseC.jpg'
  },
  {
    id: 2,
    title: 'Spiderman (Far from home)',
    releaseYear: '2019',
    duration: '2.1h',
    rating: '8 / 10',
    genre: 'Thriller',
    director: '',
    writer: '',
    Actors: [],
    plot: '',
    awards: '',
    imageUrl: '/assets/farFromHome.jpg',
    cover: '/assets/farFromHomeC1.jpg'
  },
  {
    id: 3,
    title: 'John Wick 3 (Parabelum)',
    releaseYear: '2019',
    duration: '1.8h',
    rating: '6 / 10',
    genre: 'Action',
    director: '',
    writer: '',
    Actors: [],
    plot: '',
    awards: '',
    imageUrl: '/assets/johnWick.jpg',
    cover: '/assets/johnWickC.jpg'
  },
  {
    id: 4,
    title: 'The Sectret Life Of Pets 2',
    releaseYear: '2016-2019',
    duration: '9.2 h',
    rating: '6 / 10',
    genre: 'Drama',
    director: '',
    writer: '',
    Actors: [],
    plot: '',
    awards: '',
    imageUrl: '/assets/lifePets.jpg',
    cover: '/assets/lifePetsC.jpg'
  },
  {
    id: 5,
    title: 'Captain Marvel',
    releaseYear: '2018',
    duration: '2 h',
    rating: '7 / 10',
    genre: 'Action',
    director: '',
    writer: '',
    Actors: [],
    plot: '',
    awards: '',
    imageUrl: '/assets/captainMarvel.jpg',
    cover: '/assets/captainMarvelC.jpg'
  },
  {
    id: 6,
    title: 'Minions',
    releaseYear: '2019',
    duration: '2.1h',
    rating: '7 / 10',
    genre: 'Comedy',
    director: '',
    writer: '',
    Actors: [],
    plot: '',
    awards: '',
    imageUrl: '/assets/minions.jpg',
    cover: '/assets/minionsC.jpg'
  },
  {
    id: 7,
    title: 'Girls Trip',
    releaseYear: '2017',
    duration: '2.1h',
    rating: '7 / 10',
    genre: 'Comedy',
    director: '',
    writer: '',
    Actors: [],
    plot: '',
    awards: '',
    imageUrl: '/assets/girlsTrip.jpg',
    cover: '/assets/girlsTripC.jpg'
  },
  {
    id: 8,
    title: 'Black Panther',
    releaseYear: '2019',
    duration: '2.1h',
    rating: '7 / 10',
    genre: 'Action',
    director: '',
    writer: '',
    Actors: [],
    plot: '',
    awards: '',
    imageUrl: '/assets/blackPanther.jpg',
    cover: '/assets/blackPantherC.jpg'
  },
  {
    id: 9,
    title: 'Hobbs and Shaw',
    releaseYear: '2019',
    duration: '2.1h',
    rating: '7 / 10',
    genre: 'Comedy',
    director: '',
    writer: '',
    Actors: [],
    plot: '',
    awards: '',
    imageUrl: '/assets/hobbsShaw.jpg',
    cover: '/assets/hobbsShawC.jpg'
  },
  {
    id: 10,
    title: 'The Lion King',
    releaseYear: '2019',
    duration: '2.1h',
    rating: '7 / 10',
    genre: 'Drama',
    director: '',
    writer: '',
    Actors: [],
    plot: '',
    awards: '',
    imageUrl: '/assets/lionKing.jpg',
    cover: '/assets/lionKingC.jpg'
  },
  {
    id: 11,
    title: 'Terminator Salvation',
    releaseYear: '2019',
    duration: '2.1h',
    rating: '8 / 10',
    genre: 'Action',
    director: '',
    writer: '',
    Actors: [],
    plot: '',
    awards: '',
    imageUrl: '/assets/terminatorSalvation.jpg',
    cover: '/assets/terminatorSalvationC.jpg'
  },
  {
    id: 12,
    title: 'Toy Story 4',
    releaseYear: '2019',
    duration: '2.1h',
    rating: '8 / 10',
    genre: 'Drama',
    director: '',
    writer: '',
    Actors: [],
    plot: '',
    awards: '',
    imageUrl: '/assets/toyStory4.jpg',
    cover: '/assets/toyStory4C.jpg'
  },
  {
    id: 13,
    title: 'Suicide Squad',
    releaseYear: '2016',
    duration: '2.1h',
    rating: '6 / 10',
    genre: 'Action',
    director: '',
    writer: '',
    Actors: [],
    plot: '',
    awards: '',
    imageUrl: '/assets/suicideSquad.jpg',
    cover: '/assets/suicideSquadC.jpg'
  },
  {
    id: 14,
    title: 'Avengers(Infinity War)',
    releaseYear: '2016- 2019',
    duration: '5h',
    rating: '8 / 10',
    genre: 'Action',
    director: '',
    writer: '',
    Actors: [],
    plot: '',
    awards: '',
    imageUrl: '/assets/infinityWar.jpg',
    cover: '/assets/infinityWarC.jpg'
  }
];
