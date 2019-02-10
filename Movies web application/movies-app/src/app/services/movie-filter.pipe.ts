import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'moviesFilter' })
export class MoviesFilterPipe implements PipeTransform {
    transform(movies: any[], value: string): any[] {
        const search: string = value ? value.toLocaleLowerCase() : null;
        return search ? movies.filter((movie) =>
        movie.movie_title.toLocaleLowerCase().startsWith(search)) : movies;
    }
}