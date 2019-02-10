import { Component, OnInit, OnDestroy } from '@angular/core';

import { takeWhile } from 'rxjs/operators';

import * as lodash from 'lodash';
import { Movie } from './model/movie.model';
import { MovieService } from './services/movie.service';
import { MovieItem } from './model/movie.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'movies-app';
  searchMovie: string = '';
  moviesModel: Movie;

  constructor(private readonly movieService: MovieService) {
    this.moviesModel = new Movie();
  }

  ngOnInit() {
    this.fetchMovieList();
  }

  ngOnDestroy() {
    // unsubscription of network calls when we navigate/leave out to other pages.
    this.moviesModel.canSubscribe = false;
  }

  fetchMovieList() {
    this.movieService.getMovieList().pipe(
      (takeWhile(() => this.moviesModel.canSubscribe))
    ).subscribe((data: MovieItem[]) => {
      this.moviesModel.movies = data;
      this.moviesModel.totalRecords = data.length;
      this.setGenres();
    });
  }

  setGenres() {
    this.moviesModel.movies.forEach((movie, index) => {
      this.moviesModel.movies[index].genres = movie.genres.split("|").join(", ");
    });
  }

}
