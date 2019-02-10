import { MovieItem } from './movie.interface';

export class Movie {
    movies: MovieItem[];
    canSubscribe: boolean;
    columnHeaders: any[];
    totalRecords: number;
    isDarkTheme: boolean;

    constructor() {
        this.movies = [];
        this.canSubscribe = true;
        this.isDarkTheme = false;
        this.columnHeaders = [
            { field: 'movie_title', header: 'Movie Title' },
            { field: 'director_name', header: 'Director Name' },
            { field: 'actor_1_name', header: 'Actor 1 Name' },
            { field: 'actor_2_name', header: 'Actor 2 Name' },
            { field: 'genres', header: 'Genres' },
            { field: 'language', header: 'Language' },
            { field: 'content_rating', header: 'Content Rating' },
            { field: 'budget', header: 'Budget' },
            { field: 'title_year', header: 'Title Year' },
            { field: 'movie_imdb_link', header: 'Movie Imdb Link' }
          ];
    }
}