// 

import { Component } from '@angular/core';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent {
  hover= false;
  searchTerm: string = '';
  movies: any[] = [];

  constructor(private movieService: MovieService) {}
  
  onSearch(): void {
    console.log('Search triggered:', this.searchTerm);

    if (this.searchTerm) {
      this.movieService.searchMovies(this.searchTerm).subscribe((data: any) => {
        this.movies = data.Search || [];
        console.log(this.movies);
      });
    }
  }

  onBookmark(movie: any): void {
    const bookmarked = JSON.parse(localStorage.getItem('bookmarkedMovies') || '[]');
    bookmarked.push(movie);
    localStorage.setItem('bookmarkedMovies', JSON.stringify(bookmarked));
  }
   
  onUnbookmark(movie: any): void {
    const bookmarked = JSON.parse(localStorage.getItem('bookmarkedMovies') || '[]');
    const updated = bookmarked.filter((m: any) => m.imdbID !== movie.imdbID);
    localStorage.setItem('bookmarkedMovies', JSON.stringify(updated));
  }

  isBookmarked(movie: any): boolean {
    const bookmarked = JSON.parse(localStorage.getItem('bookmarkedMovies') || '[]');
    return bookmarked.some((m: any) => m.imdbID === movie.imdbID);
  }
}
