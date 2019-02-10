import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class MovieService {
  constructor(private readonly http: HttpClient){}

  getMovieList() {
    return this.http.get('/movies');
  }
}