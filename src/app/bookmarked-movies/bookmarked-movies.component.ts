import { Component } from '@angular/core';

@Component({
  selector: 'app-bookmarked-movies',
  templateUrl: './bookmarked-movies.component.html',
  styleUrls: ['./bookmarked-movies.component.scss']
})
export class BookmarkedMoviesComponent {
  bookmarkedMovies: any[] = [];

  ngOnInit() {
    this.bookmarkedMovies = JSON.parse(localStorage.getItem('bookmarkedMovies') || '[]');
  }

  onUnbookmark(movie: any): void {
    this.bookmarkedMovies = this.bookmarkedMovies.filter(m => m.imdbID !== movie.imdbID);
    localStorage.setItem('bookmarkedMovies', JSON.stringify(this.bookmarkedMovies));
  }

  isBookmarked(movie: any): boolean {
  return this.bookmarkedMovies.some(m => m.imdbID === movie.imdbID);
}
}
